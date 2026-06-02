'use client';

import React, { useState } from 'react';

const cards = [
  {
    number: '01',
    title: 'Shape the product',
    description:
      'Discovery, framing, prioritisation, and the calls about what to build next.',
    accent:     'var(--accent)',
    hoverColor: '#94C5FF',
    hlClass:    'hl-blue',
  },
  {
    number: '02',
    title: 'AI native',
    description:
      'Prompt design, LLM integrations, and a fullstack engineering background underneath.',
    accent:     'var(--accent-2)',
    hoverColor: '#FF94C5',
    hlClass:    'hl-pink',
  },
  {
    number: '03',
    title: 'Considered design',
    description:
      'Designing alongside the build, from flow to final detail.',
    accent:     'var(--accent-3)',
    hoverColor: '#C5FF94',
    hlClass:    'hl-lime',
  },
];

const WhatIDo = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className='py-24'
      style={{
        backgroundColor: 'var(--bg-alt)',
        borderTop: '1px solid var(--divider)',
      }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2
          className='text-4xl sm:text-5xl lg:text-6xl mb-16 leading-tight'
          style={{ color: 'var(--text)' }}
        >
          I work at the intersection
          <br />
          of{' '}
          <span className={`hl-blue${hovered === 0 ? ' hl-active' : ''}`}>
            product
          </span>
          ,{' '}
          <span className={`hl-pink${hovered === 1 ? ' hl-active' : ''}`}>
            AI
          </span>{' '}
          &amp;{' '}
          <span className={`hl-lime${hovered === 2 ? ' hl-active' : ''}`}>
            design
          </span>
          .
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {cards.map((card, i) => (
            <div
              key={card.number}
              className='themed-card rounded-xl p-8 cursor-default'
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={
                hovered === i
                  ? { borderColor: card.hoverColor, boxShadow: `0 0 0 1px ${card.hoverColor}` }
                  : {}
              }
            >
              <span
                className='font-heading font-bold text-4xl'
                style={{ color: card.accent }}
              >
                {card.number}
              </span>
              <h3
                className='text-xl font-bold mt-4 mb-3 py-0'
                style={{ color: 'var(--text)' }}
              >
                {card.title}
              </h3>
              <p
                className='text-sm leading-7 font-body'
                style={{ color: 'var(--text-muted)' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
