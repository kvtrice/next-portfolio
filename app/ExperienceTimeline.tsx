'use client';

import { useEffect, useRef, useState } from 'react';

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
    role: 'AI Product Engineer',
    period: '2024 – Present',
    tag: 'AI · Enterprise',
    descriptor: 'Building AI products end-to-end inside the Generative AI team at a global engineering consultancy.',
    highlights: [
      'Led product direction for Cue, an internal AI knowledge and prompt engineering platform — driving ~20% improvement in prompt accuracy and shaping the roadmap from problem framing through to delivery.',
      'Contributed across the full product lifecycle on an automated RFI generation platform — problem framing, requirements, and hands-on delivery across both technical and business workstreams.',
      'Co-hosted Humans in the Loop, a monthly internal webinar series helping non-technical staff build confidence working with AI.',
    ],
    accent: 'var(--accent)',
  },
  {
    number: '02',
    company: 'Talk to Maple',
    role: 'Co-Founder',
    period: '2023',
    tag: 'Startup · 0→1',
    descriptor: 'Gamified AI journaling app built during Antler Australia pre-seed accelerator.',
    highlights: [
      '200+ downloads, 95% positive sentiment, measurable Day 1 and 2 retention uplift.',
      'Built and shipped MVP in 8 weeks — product, UX/UI and front-end dev all in-house.',
    ],
    accent: 'var(--accent-2)',
  },
  {
    number: '03',
    company: 'Culture Amp',
    role: 'Product Manager',
    period: '2022 – 2023',
    tag: 'Series E · Enterprise',
    descriptor: 'Retention roadmap for the Perform product at an enterprise HR SaaS company.',
    highlights: [
      'Delivered initiatives projected to reduce churn by ~5%.',
      'Business case presented to and approved by senior leadership.',
    ],
    accent: 'var(--accent-3)',
  },
  {
    number: '04',
    company: 'Surreal',
    role: 'Product Manager',
    period: '2021 – 2022',
    tag: 'Series A · First PM',
    descriptor: '0→1 product build and UK market launch at an event management SaaS startup.',
    highlights: [
      'Secured $750K in VC funding with an international product strategy pitch.',
      'Travelled to the UK to onboard early customers and build the expansion roadmap.',
    ],
    accent: 'var(--accent)',
  },
  {
    number: '05',
    company: 'Henry Schein One',
    role: 'Product Manager',
    period: '2019 – 2021',
    tag: 'Enterprise · Health Tech',
    descriptor: 'Retention-focused roadmap at a global dental software provider, shaped by continuous customer interviews and data analysis.',
    highlights: [
      'NPS up +26 points and user growth doubled in 12 months.',
      'Reduced support calls by 40% via a comprehensive help centre and Zendesk chat support.',
      'Launched Dentally (UK acquisition) in the Australian market, defining localisation priorities and onboarding initial customers.',
    ],
    accent: 'var(--accent-2)',
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
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
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
        {/* Header row 1: number + period */}
        <div className='flex items-start justify-between gap-2 mb-2'>
          <span className='font-heading font-bold text-3xl leading-none flex-shrink-0' style={{ color: role.accent }}>
            {role.number}
          </span>
          <div className='text-right flex-shrink-0'>
            <p className='text-xs font-body' style={{ color: role.accent }}>{role.period}</p>
            {role.tag && (
              <p className='text-[10px] font-body uppercase tracking-widest mt-0.5' style={{ color: 'var(--text-muted)' }}>
                {role.tag}
              </p>
            )}
          </div>
        </div>

        {/* Header row 2: role + company */}
        <p className='font-heading font-bold text-base leading-snug mb-3'>
          <span style={{ color: 'var(--text)' }}>{role.role}</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> at </span>
          <span style={{ color: role.accent }}>{role.company}</span>
        </p>

        {/* Short descriptor */}
        <p className='text-sm sm:text-sm leading-6 font-body mb-3' style={{ color: 'var(--text-muted)' }}>
          {role.descriptor}
        </p>

        {/* Outcomes toggle */}
        {role.highlights && role.highlights.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className='flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-widest transition-opacity hover:opacity-70'
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
              style={{ maxHeight: expanded ? '500px' : '0', opacity: expanded ? 1 : 0 }}
            >
              <ul className='mt-3 space-y-2'>
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
            className='btn-primary'
          >
            Full profile on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
