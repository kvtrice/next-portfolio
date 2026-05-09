'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../ThemeProvider';
import talktomaplehero from '../../public/assets/projects/talktomaple/00_talktomaple_splash.png';

const meta = [
  { label: 'Role',     value: 'Product · UX/UI · Front-End Dev' },
  { label: 'Team',     value: '3 Co-Founders' },
  { label: 'Duration', value: '8 Weeks' },
  { label: 'Tools',    value: 'Flutterflow · Xano · Firebase' },
];

const MapleHero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  /* Dark = deep Maple purple  ·  Colour = soft Maple lavender */
  const bg        = isDark ? '#201040' : '#efd4ff';
  const titleColor = isDark ? '#FAF7F2' : '#2D1060';
  const metaLabel  = isDark ? 'rgba(255,255,255,0.45)'  : 'rgba(45,16,96,0.55)';
  const metaValue  = isDark ? '#FAF7F2' : '#2D1060';
  const metaBorder = isDark ? 'rgba(255,255,255,0.14)'  : 'rgba(45,16,96,0.18)';
  const metaCellBg = isDark ? 'rgba(255,255,255,0.05)'  : 'rgba(45,16,96,0.05)';

  return (
    <section className='w-full pt-20' style={{ backgroundColor: bg, transition: 'background-color 0.4s ease' }}>
      {/* App screens */}
      <div className='max-w-[680px] mx-auto px-8 pt-12 pb-6'>
        <Image
          src={talktomaplehero}
          alt='Talk to Maple app screens'
          className='w-full h-auto object-contain'
          priority
        />
      </div>

      {/* Title */}
      <div className='max-w-[800px] mx-auto px-6 pb-12 text-center'>
        <h1
          className='text-5xl sm:text-7xl lg:text-[86px] font-bold leading-tight mb-10'
          style={{ color: titleColor, transition: 'color 0.4s ease' }}
        >
          Talk to Maple
        </h1>

        {/* Meta grid */}
        <div
          className='grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden text-left'
          style={{ border: `1px solid ${metaBorder}` }}
        >
          {meta.map(({ label, value }) => (
            <div key={label} className='px-5 py-4' style={{ backgroundColor: metaCellBg }}>
              <p
                className='text-[10px] font-body uppercase tracking-[0.2em] mb-1'
                style={{ color: metaLabel }}
              >
                {label}
              </p>
              <p className='text-sm font-body leading-5' style={{ color: metaValue }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Gradient fade into page background */}
      <div
        style={{
          height: '160px',
          background: `linear-gradient(to bottom, ${isDark ? '#201040' : '#efd4ff'}, ${isDark ? '#1A1D24' : '#FEFEFE'})`,
        }}
      />
    </section>
  );
};

export default MapleHero;
