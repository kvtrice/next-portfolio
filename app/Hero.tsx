'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const CYCLING_WORDS = ['health tech', '0 → 1 builds', 'AI products', 'tricky problems'];
const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypedCycler(words: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setWordIndex(i => (i + 1) % words.length);
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, wordIndex, words]);

  return displayed;
}

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const typed = useTypedCycler(CYCLING_WORDS);

  const headingColor  = isDark ? '#FAF7F2' : '#1A1D24';
  const subtitleColor = isDark ? 'rgba(250,247,242,0.55)' : 'rgba(26,29,36,0.60)';
  const calloutColor  = isDark ? '#FF94C5' : '#1A1D24';
  const circleColor   = isDark ? '#94C5FF' : '#1A1D24';
  const accentColor   = isDark ? '#94C5FF' : '#1A1D24';

  return (
    <section
      id='home'
      className='min-h-screen flex items-center pt-24 relative overflow-hidden'
      style={{
        background: isDark
          ? '#1A1D24'
          : `linear-gradient(135deg, #FF94C5 0%, #94C5FF 100%)`,
      }}
    >
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-16 w-full'>
        <h1
          className='text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] leading-[1.1] font-bold mb-8'
          style={{ color: headingColor }}
        >
          Hey I&apos;m Kat,
          <br className='hidden sm:block' />
          I
          {' '}
          <span className='relative inline-block'>
            <span className='font-display italic' style={{ color: calloutColor }}>
              build
            </span>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 200 60'
              preserveAspectRatio='none'
              fill='none'
              style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
            >
              <ellipse
                cx='100'
                cy='30'
                rx='93'
                ry='26'
                stroke={circleColor}
                strokeWidth='3.5'
                strokeLinecap='round'
                className='circle-animate'
              />
            </svg>
          </span>{' '}
          products
          <br className='hidden sm:block' />
          {' '}end to end.
        </h1>

        <p
          className='text-lg max-w-xl leading-7 mb-10 font-body'
          style={{ color: subtitleColor }}
        >
          Product, AI and design in one set of hands.
          <br />
          Drawn to{' '}
          <span style={{ color: accentColor, fontWeight: 600 }}>
            {typed}
            <span
              className='inline-block w-[2px] h-[1em] ml-[1px] align-middle animate-pulse'
              style={{ backgroundColor: accentColor, verticalAlign: 'text-bottom' }}
            />
          </span>
          .
        </p>

        <a href='#work' className='btn-primary'>
          See My Work
          <svg width='15' height='15' viewBox='0 0 16 16' fill='none' aria-hidden='true'>
            <path
              d='M8 3L13 8L8 13M3 8H13'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
