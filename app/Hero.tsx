'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const headingColor  = isDark ? '#FAF7F2' : '#1A1D24';
  const subtitleColor = isDark ? 'rgba(250,247,242,0.55)' : 'rgba(26,29,36,0.60)';
  const calloutColor  = isDark ? '#FF94C5' : '#1A1D24';   /* pink on dark */
  const circleColor   = isDark ? '#94C5FF' : '#1A1D24';   /* blue circle on dark */

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
          className='text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] font-bold mb-8'
          style={{ color: headingColor }}
        >
          Hey, I&apos;m Kat, a Product
          <br />
          Manager who also
          <br />
          knows how to{' '}
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
          it.
        </h1>

        <p
          className='text-lg max-w-xl leading-7 mb-10 font-body'
          style={{ color: subtitleColor }}
        >
          Background in software engineering, AI and product design.
          Specialising in translating complex problems into simple solutions.
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
