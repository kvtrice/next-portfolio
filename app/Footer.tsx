import React from 'react';

const Footer = () => {
  return (
    <footer
      id='footer'
      className='py-24'
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--divider)',
      }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Main CTA */}
        <div className='mb-20'>
          <h2
            className='text-5xl sm:text-6xl lg:text-7xl leading-tight mb-10'
            style={{ color: 'var(--text)' }}
          >
            Let&apos;s work
            <br />
            <span className='font-display italic'>together</span>.
          </h2>
          <a href='mailto:katricemountford@gmail.com' className='btn-primary text-base'>
            katricemountford@gmail.com
          </a>
        </div>

        {/* Bottom row — links + copyright */}
        <div
          className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-10'
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <nav className='flex gap-6 flex-wrap'>
            {[
              { href: 'https://www.linkedin.com/in/katmountford/', label: 'LinkedIn' },
              { href: 'https://github.com/kvtrice', label: 'GitHub' },
              { href: '/talktomaple', label: 'Talk to Maple' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className='text-sm font-body transition-opacity duration-200 hover:opacity-100'
                style={{ color: 'var(--text-muted)' }}
              >
                {label}
              </a>
            ))}
          </nav>

          <p className='text-xs font-body' style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Katrice Mountford
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
