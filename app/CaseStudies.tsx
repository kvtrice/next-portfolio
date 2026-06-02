import CaseStudyCard from './CaseStudyCard';

const CaseStudies = () => {
  return (
    <section id='work' className='py-24' style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--divider)' }}>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16' style={{ color: 'var(--text)' }}>
          Things I&apos;ve built
        </h2>

        <div className='max-w-2xl'>
          <CaseStudyCard
            title='Talk to Maple'
            description='A gamified AI journaling app built during Antler Australia startup accelerator. From zero research to launch in 8 weeks.'
            image='/assets/project-tiles/talktomaple.png'
            tags={['AI', 'Mobile', 'Mental Health', 'Flutterflow']}
            href='/talktomaple'
            year='2023'
            stats={[
              { value: 85, suffix: '',  label: 'users in week one',   color: 'var(--accent)'   },
              { value: 95, suffix: '%', label: 'felt same or better', color: 'var(--accent-2)' },
              { value: 8,  suffix: '',  label: 'weeks to launch',     color: 'var(--accent-3)' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
