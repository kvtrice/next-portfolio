import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudies = () => {
  return (
    <section id='work' className='py-24' style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--divider)' }}>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16' style={{ color: 'var(--text)' }}>
          Product case studies
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <CaseStudyCard
            title='Talk to Maple'
            description='A gamified AI journaling app built during Antler Australia startup accelerator. From zero research to launch in 8 weeks.'
            image='/assets/project-tiles/talktomaple.png'
            tags={['AI', 'Mobile', 'Mental Health', 'Flutterflow']}
            href='/talktomaple'
            year='2023'
            stats={[
              { value: 85, suffix: '',  label: 'users in week one',   color: '#94C5FF' },
              { value: 95, suffix: '%', label: 'felt same or better', color: '#FF94C5' },
              { value: 8,  suffix: '',  label: 'weeks to launch',     color: '#C5FF94' },
            ]}
          />

          <div className='themed-card rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center'>
            <span className='text-4xl mb-4' style={{ color: 'var(--text-muted)' }}>✦</span>
            <p className='font-heading font-bold text-xl mb-2' style={{ color: 'var(--text-muted)' }}>
              More coming soon
            </p>
            <p className='text-sm font-body max-w-xs' style={{ color: 'var(--text-muted)' }}>
              Next case study in progress. Connect on LinkedIn to follow along.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
