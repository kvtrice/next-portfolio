'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

/* Each link has a brand-colour pill that appears on hover */
const links = [
  { href: '/',           label: 'Home',       pill: '#94C5FF' },
  { href: '/#work',      label: 'Work',       pill: '#FF94C5' },
  { href: '/#projects',  label: 'Projects',   pill: '#C5FF94' },
  { href: '/#about',     label: 'About',      pill: '#94C5FF' },
  { href: '/#timeline',  label: 'Experience', pill: '#FF94C5' },
  { href: '/#footer',    label: 'Contact',    pill: '#C5FF94' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      {/* Desktop: floating pill centered at top */}
      <div className='hidden md:flex justify-center pt-5 px-4'>
        <nav
          className='flex items-center gap-1 rounded-full px-5 py-2.5 shadow-lg backdrop-blur-md'
          style={{
            backgroundColor: 'var(--nav-bg)',
            border: '1px solid var(--nav-border)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          }}
        >
          {links.map(({ href, label, pill }) => {
            const isHovered = hoveredLink === href;
            return (
              <Link
                key={href}
                href={href}
                className='nav-link'
                onMouseEnter={() => setHoveredLink(href)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  backgroundColor: isHovered ? pill : 'transparent',
                  color: isHovered ? '#1A1D24' : 'var(--nav-text)',
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Theme toggle — sun/moon */}
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to colour theme' : 'Switch to dark theme'}
            className='ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110'
            style={{
              border: '1px solid var(--nav-border)',
              background: 'transparent',
              color: 'var(--nav-text)',
            }}
          >
            {theme === 'dark'
              ? <FiSun size={14} />
              : <FiMoon size={14} />
            }
          </button>
        </nav>
      </div>

      {/* Mobile: floating buttons top-right */}
      <div className='md:hidden absolute top-4 right-4 flex gap-2'>
        <button
          onClick={toggle}
          aria-label='Switch theme'
          className='w-10 h-10 rounded-full flex items-center justify-center shadow-md backdrop-blur-md transition-all duration-200'
          style={{
            backgroundColor: 'var(--nav-bg)',
            border: '1px solid var(--nav-border)',
            color: 'var(--nav-text)',
          }}
        >
          {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label='Open menu'
          className='w-10 h-10 rounded-full flex items-center justify-center shadow-md backdrop-blur-md'
          style={{
            backgroundColor: 'var(--nav-bg)',
            border: '1px solid var(--nav-border)',
            color: 'var(--nav-text)',
          }}
        >
          <AiOutlineMenu size={18} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--bg)' }}
      >
        <div
          className='flex justify-between items-center px-6 h-16 border-b'
          style={{ borderColor: 'var(--border)' }}
        >
          <span className='font-heading font-bold text-lg' style={{ color: 'var(--text)' }}>
            Kat
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label='Close menu'
            style={{ background: 'transparent', border: 'none', boxShadow: 'none', color: 'var(--text)' }}
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <nav className='flex flex-col items-start justify-center flex-1 px-8 gap-5'>
          {links.map(({ href, label, pill }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className='font-heading font-bold text-5xl transition-all duration-200 hover:pl-3'
              style={{ color: 'var(--text)' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = pill; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--text)'; }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className='px-8 pb-10 text-sm font-body' style={{ color: 'var(--text-muted)' }}>
          Katrice Mountford · Product · AI · Design
        </p>
      </div>
    </header>
  );
};

export default Navbar;
