'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Stat = { value: number; suffix: string; label: string; color: string };

type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  year: string;
  imageBg?: string;
  stats?: Stat[];
};

function StatCounter({ value, suffix, label, color }: Stat) {
  const [count, setCount] = useState(0);
  const [fired, setFired] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
    const total = 55;
    const tick = () => {
      frame++;
      setCount(Math.round(value * (frame / total)));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [fired, value]);

  return (
    <div className='flex items-baseline gap-1.5'>
      <span ref={ref} className='font-heading font-bold text-xl' style={{ color }}>
        {count}{suffix}
      </span>
      <span className='text-[10px] font-body uppercase tracking-widest' style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  );
}

const CaseStudyCard = ({
  title,
  description,
  image,
  tags,
  href,
  year,
  imageBg,
  stats,
}: CaseStudyCardProps) => {
  /* Theme-aware background:
     dark  = deep Maple purple
     light = soft Maple lavender */
  const bg = imageBg ?? 'var(--case-img-bg)';

  return (
    <Link href={href} className='group block'>
      <article className='themed-card rounded-xl overflow-hidden h-full flex flex-col'>

        {/* Image on deep branded background */}
        {/* Swap talktomaple.jpg → talktomaple.png once saved to /public/assets/project-tiles/ */}
        <div
          className='relative w-full flex items-center justify-center overflow-hidden'
          style={{ aspectRatio: '16/9', backgroundColor: bg }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className='object-contain group-hover:scale-[1.03] transition-transform duration-500 p-4'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          {year && (
            <span
              className='absolute top-3 left-3 text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full z-10'
              style={{ backgroundColor: 'var(--pill-bg)', color: 'var(--pill-text)', backdropFilter: 'blur(4px)' }}
            >
              {year}
            </span>
          )}
        </div>

        {/* Content */}
        <div className='p-7 flex flex-col flex-1'>
          {/* Meta row */}
          <div className='flex items-center justify-between mb-4 flex-wrap gap-2'>
            <span className='text-xs font-body uppercase tracking-[0.2em]' style={{ color: 'var(--text-muted)' }}>
              {year}
            </span>
            <p className='tag-dot-list'>
              {tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  {i > 0 && <span className='dot'>·</span>}
                  {tag}
                </React.Fragment>
              ))}
            </p>
          </div>

          <h3
            className='text-2xl font-bold mb-2 py-0 group-hover:opacity-80 transition-opacity'
            style={{ color: 'var(--text)' }}
          >
            {title}
          </h3>

          <p className='text-sm leading-7 font-body mb-5' style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>

          {/* Stats — inline, no nested box */}
          {stats && stats.length > 0 && (
            <div className='flex flex-wrap gap-x-5 gap-y-2 mb-5'>
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          )}

          <span
            className='inline-flex items-center gap-2 font-heading font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200'
            style={{ color: 'var(--accent-2)' }}
          >
            Read Case Study
            <svg width='14' height='14' viewBox='0 0 16 16' fill='none' aria-hidden='true'>
              <path d='M8 3L13 8L8 13M3 8H13' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;
