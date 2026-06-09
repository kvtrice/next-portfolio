'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ChangeEvent, type ReactNode } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

const WELCOME = "Hey! I'm Kat's AI assistant. Ask me anything about her background, how she works, or what she's been building.";
const MAX_MESSAGES = 10;

function parseBold(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let k = 0;
  while (rest.length > 0) {
    const m = /\*\*(.+?)\*\*/.exec(rest);
    if (!m) { nodes.push(rest); break; }
    if (m.index > 0) nodes.push(rest.slice(0, m.index));
    nodes.push(<strong key={k++}>{m[1]}</strong>);
    rest = rest.slice(m.index + m[0].length);
  }
  return nodes;
}

function MarkdownText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className='space-y-1'>
      {lines.map((line, li) => {
        if (!line.trim()) return <div key={li} className='h-1' />;
        const isBullet = /^[-*]\s/.test(line);
        const raw = isBullet ? line.replace(/^[-*]\s/, '') : line;
        if (isBullet) {
          return (
            <div key={li} className='flex items-start gap-1'>
              <span className='flex-shrink-0'>•</span>
              <span>{parseBold(raw)}</span>
            </div>
          );
        }
        return <div key={li}>{parseBold(line)}</div>;
      })}
    </div>
  );
}

export default function AskKat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastMsgRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // 'bottom' = scroll to end, 'last-top' = scroll to top of newest bot msg, null = no scroll
  const pendingScroll = useRef<'bottom' | 'last-top' | null>(null);

  // Focus + jump to bottom when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [open]);

  // Controlled scroll — only fires when pendingScroll is set, never during streaming
  useEffect(() => {
    if (!open) return;
    if (pendingScroll.current === 'bottom') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      pendingScroll.current = null;
    } else if (pendingScroll.current === 'last-top') {
      lastMsgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      pendingScroll.current = null;
    }
  }, [open, messages]);

  const atLimit = messages.length >= MAX_MESSAGES;

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const el = e.currentTarget;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }

  async function send() {
    const text = input.trim();
    if (!text || loading || atLimit) return;

    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    setLoading(true);
    pendingScroll.current = 'bottom'; // show user message + loading indicator

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.body) throw new Error('No body');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';

      pendingScroll.current = 'last-top'; // scroll to TOP of bot response, not bottom
      setMessages(m => [...m, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        // pendingScroll is null here — streaming updates never auto-scroll
        setMessages(m => {
          const updated = [...m];
          updated[updated.length - 1] = { role: 'assistant', content: reply };
          return updated;
        });
      }
    } catch {
      setMessages(m => [
        ...m,
        { role: 'assistant', content: "I'm not available right now. Reach out to Kat directly at katricemountford@gmail.com." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger — gradient border only, solid inner fill */}
      <div
        className='fixed bottom-6 right-6 z-50'
        style={{
          background: 'linear-gradient(135deg, #94C5FF 0%, #FF94C5 55%, #C5FF94 100%)',
          padding: '1.5px',
          borderRadius: '9999px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
        }}
      >
        <button
          onClick={() => setOpen(o => !o)}
          aria-label='Ask Kat'
          className='flex items-center gap-2 px-4 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95'
          style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/assets/kat_new.png'
            alt='Kat'
            width={24}
            height={24}
            className='rounded-full flex-shrink-0 object-cover'
            style={{ objectPosition: 'center 15%', width: 24, height: 24 }}
          />
          Ask Kat
        </button>
      </div>

      {/* Chat panel */}
      <div
        className='fixed bottom-20 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300'
        style={{
          width: 'min(340px, calc(100vw - 3rem))',
          maxHeight: open ? '480px' : '0',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--divider)',
        }}
      >
        {/* Header */}
        <div
          className='flex items-center justify-between px-4 py-3 flex-shrink-0'
          style={{ borderBottom: '1px solid var(--divider)', backgroundColor: 'var(--bg-alt)' }}
        >
          <div className='flex items-center gap-2'>
            <span className='w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#94C5FF]'>
              <Image src='/assets/kat_new.png' alt='Kat' width={28} height={28} className='object-cover object-top w-full h-full' />
            </span>
            <span className='font-heading font-bold text-sm' style={{ color: 'var(--text)' }}>Ask Kat</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label='Close'
            className='text-lg leading-none transition-opacity hover:opacity-60'
            style={{ color: 'var(--text-muted)', background: 'none', border: 'none' }}
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className='flex-1 overflow-y-auto px-4 py-3 space-y-3' style={{ minHeight: 0 }}>
          <div className='flex gap-2 items-start'>
            <div
              className='text-xs leading-6 font-body px-3 py-2 rounded-xl rounded-tl-sm max-w-[85%]'
              style={{ backgroundColor: 'var(--bg-alt)', color: 'var(--text-muted)', border: '1px solid var(--divider)' }}
            >
              {WELCOME}
            </div>
          </div>

          {messages.map((m, i) => (
            <div
              key={i}
              ref={i === messages.length - 1 && m.role === 'assistant' ? lastMsgRef : undefined}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className='text-xs leading-6 font-body px-3 py-2 rounded-xl max-w-[85%]'
                style={
                  m.role === 'user'
                    ? { backgroundColor: '#94C5FF', color: '#1A1D24', borderRadius: '12px 12px 4px 12px' }
                    : { backgroundColor: 'var(--bg-alt)', color: 'var(--text-muted)', border: '1px solid var(--divider)', borderRadius: '12px 12px 12px 4px' }
                }
              >
                {m.role === 'assistant'
                  ? (m.content ? <MarkdownText text={m.content} /> : (loading ? '…' : ''))
                  : m.content
                }
              </div>
            </div>
          ))}

          {atLimit && (
            <p className='text-[11px] font-body text-center py-1' style={{ color: 'var(--text-muted)' }}>
              That&apos;s the session limit.{' '}
              <a href='mailto:katricemountford@gmail.com' className='underline' style={{ color: '#94C5FF' }}>
                reach out directly
              </a>{' '}
              to continue the conversation.
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input — textarea expands to multiline, items-end keeps send btn at bottom */}
        <div
          className='flex items-end gap-2 px-3 py-3 flex-shrink-0'
          style={{ borderTop: '1px solid var(--divider)', backgroundColor: 'var(--bg-alt)' }}
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={handleInputChange}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={atLimit ? 'Session limit reached' : 'Ask anything...'}
            disabled={loading || atLimit}
            className='flex-1 text-xs font-body bg-transparent outline-none placeholder:opacity-40 resize-none overflow-hidden'
            style={{ color: 'var(--text)', maxHeight: '96px', lineHeight: '1.5rem' }}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim() || atLimit}
            className='flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 mb-px'
            style={{ backgroundColor: '#94C5FF', color: '#1A1D24', border: 'none' }}
            aria-label='Send'
          >
            <svg width='12' height='12' viewBox='0 0 16 16' fill='none'>
              <path d='M8 3L13 8L8 13M3 8H13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
