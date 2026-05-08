'use client';

import React, { useEffect, useRef, useState } from 'react';

type Role = {
  number: string;
  company: string;
  role: string;
  period: string;
  tag?: string;
  descriptor: string;
  highlights?: string[];
  accent: string;
};

const roles: Role[] = [
  {
    number: '01',
    company: 'Aurecon',
    role: 'Product Engineer',
    period: 'Oct 2024 – Present',
    tag: 'AI · Enterprise',
    descriptor: 'AI-powered internal tooling for a global engineering consultancy.',
    highlights: [
      'Launched Cue, improving prompt accuracy ~40% and driving adoption across the business.',
      'Owned product direction for ClaRFI — AI tool for faster RFI generation and response.',
      'Co-hosted Humans in the Loop monthly webinar series drawing hundreds of attendees.',
    ],
    accent: '#94C5FF',
  },
  {
    number: '02',
    company: 'Talk to Maple',
    role: 'Co-Founder',
    period: 'Jan – Jun 2023',
    tag: 'Startup · 0→1',
    descriptor: 'Gamified AI journaling app built during Antler Australia pre-seed accelerator.',
    highlights: [
      '200+ downloads, 95% positive sentiment, measurable Day 1 and 2 retention uplift.',
      'Built and shipped MVP in 8 weeks — product, UX/UI and front-end dev all in-house.',
    ],
    accent: '#FF94C5',
  },
  {
    number: '03',
    company: 'Culture Amp',
    role: 'Product Manager',
    period: 'Jul 2022 – Jan 2023',
    tag: 'Series E · Enterprise',
    descriptor: 'Retention roadmap for the Perform product at an enterprise HR SaaS company.',
    highlights: [
      'Delivered initiatives projected to reduce churn by ~5%.',
      'Business case presented to and approved by senior leadership.',
    ],
    accent: '#C5FF94',
  },
  {
    number: '04',
    company: 'Surreal',
    role: 'Product Manager',
    period: 'Jul 2021 – Jul 2022',
    tag: 'Series A · First PM',
    descriptor: '0→1 product build and UK market launch at an event management SaaS startup.',
    highlights: [
      'Secured $750K in VC funding with an international product strategy pitch.',
      'Travelled to the UK to onboard early customers and build the expansion roadmap.',
    ],
    accent: '#94C5FF',
  },
  {
    number: '05',
    company: 'Henry Schein One',
    role: 'Product Manager',
    period: 'Jun 2019 – Jul 2021',
    tag: 'Enterprise · Promoted',
    descriptor: 'Promoted from Senior Technical Support into Product at a global dental software provider.',
    highlights: [
      'NPS up +26 points and user growth doubled in 12 months.',
      'Reduced support calls by 40% via a comprehensive help centre.',
    ],
    accent: '#FF94C5',
  },
];

function RoleCard({ role, isEven }: { role: Role; isEven: boolean }) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}
    >
      <div
        ref={ref}
        className='themed-card rounded-xl p-7 w-full md:w-[62%]'
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translateX(0) translateY(0)'
            : isEven
            ? 'translateX(48px) translateY(8px)'
            : 'translateX(-48px) translateY(8px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
          ...(visible && {
            ['--hover-border' as string]: role.accent,
          }),
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = role.accent;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${role.accent}`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = '';
          (e.currentTarget as HTMLElement).style.boxShadow = '';
        }}
      >
        {/* Header */}
        <div className='flex items-start justify-between gap-4 mb-3'>
          <div className='flex items-baseline gap-3'>
            <span className='font-heading font-bold text-3xl leading-none' style={{ color: role.accent }}>
              {role.number}
            </span>
            <div>
              <p className='font-heading font-bold text-base leading-snug' style={{ color: 'var(--text)' }}>
                {role.company}
              </p>
              <p className='text-xs font-body' style={{ color: 'var(--text-muted)' }}>
                {role.role}
              </p>
            </div>
          </div>
          <div className='text-right flex-shrink-0'>
            <p className='text-xs font-body' style={{ color: role.accent }}>{role.period}</p>
            {role.tag && (
              <p className='text-[10px] font-body uppercase tracking-widest mt-0.5' style={{ color: 'var(--text-muted)' }}>
                {role.tag}
              </p>
            )}
          </div>
        </div>

        {/* Short descriptor */}
        <p className='text-sm leading-6 font-body mb-3 pl-10' style={{ color: 'var(--text-muted)' }}>
          {role.descriptor}
        </p>

        {/* Outcomes toggle */}
        {role.highlights && role.highlights.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className='flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-widest ml-10 transition-opacity hover:opacity-70'
              style={{ color: role.accent, background: 'none', border: 'none', boxShadow: 'none', padding: 0 }}
            >
              <span
                className='text-[9px] inline-block transition-transform duration-300'
                style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0)' }}
              >
                ▶
              </span>
              {expanded ? 'Close' : 'Outcomes'}
            </button>

            <div
              className='overflow-hidden transition-all duration-300'
              style={{ maxHeight: expanded ? '400px' : '0', opacity: expanded ? 1 : 0 }}
            >
              <ul className='mt-3 space-y-2 ml-10'>
                {role.highlights.map((h, i) => (
                  <li key={i} className='flex items-start gap-2 text-sm leading-6 font-body'>
                    <span className='mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: role.accent }} />
                    <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const ExperienceTimeline = () => {
  return (
    <section
      id='timeline'
      className='py-24'
      style={{ backgroundColor: 'var(--bg-alt, var(--bg))', borderTop: '1px solid var(--divider)' }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2
          className='text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16'
          style={{ color: 'var(--text)' }}
        >
          Experience
        </h2>

        <div className='flex flex-col gap-5'>
          {roles.map((role, i) => (
            <RoleCard key={role.number} role={role} isEven={i % 2 !== 0} />
          ))}
        </div>

        <div className='mt-12'>
          <a
            href='https://www.linkedin.com/in/katmountford/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-outline'
          >
            Full profile on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
