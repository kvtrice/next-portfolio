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
                Hey I&apos;m Kat 👋 A Product Manager who likes making things{' '}
                <span className='hl-pink'>clearer, simpler, and easier</span> for people to use. Most of my work
                sits at the intersection of product, design, and engineering. I
                enjoy diving into messy or unclear problems, understanding what
                people are actually trying to do and then shaping a solution that
                genuinely helps.
              </p>
              <p>
                My background includes product management, UX thinking, and{' '}
                <span className='hl-lime'>enough hands-on engineering</span> to
                collaborate closely with developers and understand what&apos;s
                feasible. I&apos;m not precious about where
                ideas come from. I care more about whether the end result
                helps someone and solves the real problem.
              </p>
              <p>
                I&apos;m motivated by{' '}
                <span className='hl-pink'>meaningful, human-impact work</span>. I like
                building products that make someone&apos;s job easier, save time,
                reduce confusion or help a team work better together. I&apos;m
                also a continuous learner. Over the years I&apos;ve built skills
                across software engineering, AI tooling, psychology and
                neuroscience, mostly because I&apos;m curious and want to
                understand how things (and people) work. That curiosity helps me
                ask better questions and make more grounded product decisions.
              </p>
              <p>
                At the core, I like{' '}
                <span className='hl-blue'>creating clarity</span>. Whether it&apos;s a
                feature, a workflow, a roadmap or a conversation. I want
                the end result to feel organised, purposeful and easy to navigate.
                And when I&apos;m not focussed on that, outside of work you&apos;ll
                usually find me reading, walking my dog, playing board games with
                my family, or finding some outdoor walks to explore 🥾
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
