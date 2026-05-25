import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='py-24'
      style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--divider)' }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>

          {/* Photo — registration mark corner brackets */}
          <div className='flex justify-center md:justify-start'>
            {/*
              Corner brackets sit outside the photo boundary by 6px.
              Blue (#94C5FF) top corners, coral (#FF94C5) bottom corners.
              Outer wrapper has padding to show the brackets.
            */}
            {/* Gradient border — outer div IS the gradient, inner is the bg fill */}
            <div
              style={{
                background: 'linear-gradient(135deg, #94C5FF 0%, #FF94C5 55%, #C5FF94 100%)',
                padding: '4px',
                borderRadius: '16px',
                boxShadow: '0 0 36px 8px rgba(148,197,255,0.18)',
              }}
            >
              <div
                className='relative overflow-hidden'
                style={{
                  width: '250px',
                  height: '320px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg)',
                }}
              >
                <Image
                  src='/assets/kat_new.png'
                  alt='Katrice Mountford'
                  fill
                  className='object-cover object-top'
                  sizes='250px'
                />
              </div>
            </div>
          </div>

          {/* Text — 2/3 columns */}
          <div className='md:col-span-2'>
            <h2
              className='text-4xl sm:text-5xl leading-tight mb-8'
              style={{ color: 'var(--text)' }}
            >
              I make tricky
              <br />
              problems simple.
            </h2>

            <div
              className='space-y-5 text-base font-body'
              style={{ color: 'var(--text-muted)' }}
            >
              <p>
                Hey I&apos;m Kat 👋 A Product Manager with a background across{' '}
                <span className='hl-pink'>software engineering, AI and UX design</span>, and 
                I love working at the intersection of all three.
              </p>
              <p>
                My product career has been varied; from launching{' '}
                <span className='hl-lime'>0 → 1 products</span> at early stage startups
                to building at scale in enterprise SaaS. A few years ago I made a
                deliberate move into software engineering. I wanted to get closer
                to the code, understand the challenges engineers face, and become
                a better partner to the teams I work with.
              </p>
              <p>
                I&apos;m not precious about where ideas come from. I care most
                about whether the end result solves the real problem and whether
                it makes someone&apos;s day a little easier. The work I&apos;m most
                drawn to is where I can{' '}
                <span className='hl-pink'>help make a real impact</span> on the lives of others: spaces such as health, wellbeing,
                how people spend their working lives.
              </p>
              <p>
                Outside of work you&apos;ll usually find me reading, walking my dog,
                playing board games with my family, or out{' '}
                <span className='hl-blue'>exploring somewhere new</span> 🥾
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
