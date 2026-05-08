'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlight?: string;
  accent: string;
  tag?: string;
};

/* ── Update this data with your real history ── */
const roles: Role[] = [
  {
    company: 'Antler Australia',
    role: 'Co-Founder & Product Manager',
    period: 'Jan 2023 – Apr 2023',
    location: 'Sydney, Australia',
    summary:
      'Built Talk to Maple — a gamified AI journaling app for Gen-Z mental health — from zero to app store launch in 8 weeks during Antler\'s pre-seed accelerator program.',
    highlight: '85 users in week one. 95% of sessions left users feeling the same or better.',
    accent: '#FF94C5',
    tag: 'Startup',
  },
  {
    company: 'Add your next role',
    role: 'Your Title Here',
    period: '20XX – 20XX',
    location: 'Location',
    summary: 'A short 2-3 sentence description of what you did and what you shipped.',
    highlight: 'Your proudest outcome from this role.',
    accent: '#94C5FF',
    tag: 'PM',
  },
  {
    company: 'Add another role',
    role: 'Your Title Here',
    period: '20XX – 20XX',
    location: 'Location',
    summary: 'A short 2-3 sentence description of what you did and what you shipped.',
    highlight: 'Your proudest outcome from this role.',
    accent: '#C5FF94',
    tag: 'Design',
  },
  {
    company: 'Earlier experience',
    role: 'Your Title Here',
    period: '20XX – 20XX',
    location: 'Location',
    summary: 'A short 2-3 sentence description of what you did and what you shipped.',
    accent: '#FF94C5',
    tag: 'CX',
  },
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10'>
      {/* Timeline line + dot */}
      <div className='flex flex-col items-center'>
        <div
          className='w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ring-4'
          style={{
            backgroundColor: role.accent,
            boxShadow: `0 0 0 4px ${role.accent}33`,
          }}
        />
        {index < roles.length - 1 && (
          <div className='w-px flex-1 mt-2' style={{ backgroundColor: 'var(--divider)' }} />
        )}
      </div>

      {/* Content */}
      <div className='pb-12'>
        <div className='flex flex-wrap items-start gap-3 mb-2'>
          {role.tag && (
            <span
              className='text-[10px] font-body uppercase tracking-widest px-2.5 py-0.5 rounded-full'
              style={{
                backgroundColor: `${role.accent}22`,
                color: role.accent,
                border: `1px solid ${role.accent}55`,
              }}
            >
              {role.tag}
            </span>
          )}
          <span className='text-xs font-body' style={{ color: 'var(--text-muted)' }}>
            {role.period}
          </span>
          <span className='text-xs font-body' style={{ color: 'var(--text-muted)' }}>
            {role.location}
          </span>
        </div>

        <h3
          className='text-xl font-bold py-0 mb-1 leading-snug'
          style={{ color: 'var(--text)' }}
        >
          {role.role}
        </h3>
        <p
          className='text-base font-body mb-3'
          style={{ color: role.accent }}
        >
          {role.company}
        </p>
        <p className='text-sm leading-7 font-body mb-4' style={{ color: 'var(--text-muted)' }}>
          {role.summary}
        </p>

        {role.highlight && (
          <button
            onClick={() => setExpanded(!expanded)}
            className='text-sm font-heading font-semibold flex items-center gap-2 transition-all duration-200'
            style={{
              color: role.accent,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: 0,
            }}
          >
            <span
              className='inline-block transition-transform duration-300'
              style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              ▶
            </span>
            {expanded ? 'Hide highlight' : 'Key outcome'}
          </button>
        )}

        {/* Expandable highlight */}
        <div
          className='overflow-hidden transition-all duration-400'
          style={{ maxHeight: expanded ? '200px' : '0px', opacity: expanded ? 1 : 0 }}
        >
          <div
            className='mt-4 p-4 rounded-xl text-sm font-body leading-7'
            style={{
              backgroundColor: `${role.accent}14`,
              borderLeft: `3px solid ${role.accent}`,
              color: 'var(--text)',
            }}
          >
            {role.highlight}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <main className='min-h-screen pt-28 pb-24' style={{ backgroundColor: 'var(--bg)' }}>
      <div className='max-w-3xl mx-auto px-6'>
        {/* Header */}
        <div className='mb-16'>
          <Link
            href='/'
            className='text-sm font-body mb-8 inline-flex items-center gap-2 transition-opacity hover:opacity-60'
            style={{ color: 'var(--text-muted)' }}
          >
            ← Back home
          </Link>
          <h1
            className='text-5xl sm:text-6xl font-bold mt-6 mb-4 leading-tight'
            style={{ color: 'var(--text)' }}
          >
            Experience
          </h1>
          <p className='text-base font-body max-w-md' style={{ color: 'var(--text-muted)' }}>
            A snapshot of where I&apos;ve been and what I&apos;ve built.
            Click any role to see the highlight.
          </p>
        </div>

        {/* Timeline entries */}
        <div>
          {roles.map((role, i) => (
            <RoleCard key={`${role.company}-${i}`} role={role} index={i} />
          ))}
        </div>

        {/* Footer nudge */}
        <div
          className='mt-8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <p className='text-sm font-body' style={{ color: 'var(--text-muted)' }}>
            Want the full picture?
          </p>
          <a
            href='https://www.linkedin.com/in/katmountford/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-opacity hover:opacity-75'
            style={{
              backgroundColor: '#94C5FF',
              color: '#1A1D24',
              border: '1.5px solid #94C5FF',
            }}
          >
            View full LinkedIn profile ↗
          </a>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
