'use client';

import { useEffect, useRef, useState } from 'react';

type Metric = {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  accent: string;
};

const metrics: Metric[] = [
  { prefix: '+', value: 26, suffix: '', label: 'NPS lifted',           accent: 'var(--accent)' },
  { prefix: '$', value: 750, suffix: 'K', label: 'VC funding secured', accent: 'var(--accent)' },
  { value: 40,  suffix: '%', label: 'support calls reduced',           accent: 'var(--accent)' },
  { value: 200, suffix: '+', label: 'downloads at launch',             accent: 'var(--accent)' },
  { value: 95,  suffix: '%', label: 'positive sentiment',              accent: 'var(--accent)' },
];

function Counter({ metric }: { metric: Metric }) {
  const [count, setCount] = useState(0);
  const [fired, setFired] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    let frame = 0;
    const total = 50;
    const tick = () => {
      frame++;
      setCount(Math.round(metric.value * (frame / total)));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [fired, metric.value]);

  return (
    <div ref={ref} className='flex flex-col items-center gap-1 px-4 sm:px-6'>
      <span
        className='font-heading font-bold text-3xl sm:text-4xl leading-none tabular-nums'
        style={{ color: metric.accent }}
      >
        {metric.prefix ?? ''}{count}{metric.suffix}
      </span>
      <span
        className='text-[10px] sm:text-xs font-body uppercase tracking-widest text-center'
        style={{ color: 'var(--text-muted)' }}
      >
        {metric.label}
      </span>
    </div>
  );
}

const MetricsBar = () => {
  return (
    <section
      className='py-14'
      style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--divider)' }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-wrap justify-center sm:justify-between gap-8 sm:gap-4'>
          {metrics.map((m) => (
            <Counter key={m.label} metric={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
