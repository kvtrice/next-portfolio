'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type LabProject = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year?: string;
  liveSiteUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
};

const projects: LabProject[] = [
  {
    title: 'Sproutly Forum',
    description: 'Full-stack forum for plant lovers. MongoDB, Express, React, Node.',
    image: '/assets/project-tiles/Sproutly.gif',
    tags: ['React', 'Node', 'MongoDB'],
    year: '2024',
    liveSiteUrl: 'https://canva.link/1ykudef2iqqexoc',
    liveLabel: 'View Slides',
    githubUrl: 'https://github.com/kvtrice/sproutly-frontend',
  },
  {
    title: 'To-do App',
    description: 'Fullstack kanban task manager. TypeScript frontend, Java Spring Boot backend.',
    year: '2024',
    image: '/assets/project-tiles/to-do.jpg',
    tags: ['TypeScript', 'Java', 'React'],
    githubUrl: 'https://github.com/kvtrice/todo-app',
  },
  {
    title: 'Morse Code Translator',
    description: 'Real-time English to Morse code translation in the browser.',
    image: '/assets/project-tiles/morse-code.jpg',
    year: '2024',
    tags: ['JavaScript', 'Sass', 'Jest'],
    liveSiteUrl: 'https://morse-code-translator-ten.vercel.app/',
    githubUrl: 'https://github.com/kvtrice/morse-code-translator',
  },
  {
    title: 'Windows 98 OS',
    description: 'A working simulation of the Windows 98 operating system.',
    image: '/assets/project-tiles/windows-98.jpg',
    year: '2024',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveSiteUrl: 'https://windows-98-os.vercel.app/',
    githubUrl: 'https://github.com/kvtrice/windows-98-OS',
  },
];

const ProjectCard = ({ project }: { project: LabProject }) => {
  const liveLabel = project.liveLabel ?? 'Live ↗';
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px) scale(1.01)`;
    el.style.transition = 'transform 0.08s ease';
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.transition = 'transform 0.4s ease';
  };

  return (
    <article
      ref={cardRef}
      key={project.title}
      className='themed-card rounded-xl overflow-hidden flex flex-col'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image with optional year badge */}
      <div className='relative w-full overflow-hidden' style={{ aspectRatio: '4/3' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
        />
        {project.year && (
          <span
            className='absolute top-2.5 left-2.5 text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full'
            style={{ backgroundColor: 'var(--accent)', color: '#1A1D24' }}
          >
            {project.year}
          </span>
        )}
      </div>

      {/* Content — flex-col so buttons always sit at the bottom */}
      <div className='p-5 flex flex-col flex-1'>
        <h3 className='text-base font-bold mb-1 py-0 leading-snug' style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p className='text-xs leading-6 mb-4 font-body' style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>

        <p className='tag-dot-list mb-4'>
          {project.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              {i > 0 && <span className='dot'>·</span>}
              {tag}
            </React.Fragment>
          ))}
        </p>

        <div className='flex gap-2 flex-wrap mt-auto'>
          {project.liveSiteUrl && (
            <Link href={project.liveSiteUrl} target='_blank' rel='noopener noreferrer'>
              <span
                className='inline-flex items-center px-4 py-1.5 rounded-lg font-heading font-semibold text-xs transition-opacity duration-200 hover:opacity-80'
                style={{ backgroundColor: '#C5FF94', color: '#1A1D24', border: '1.5px solid #C5FF94' }}
              >
                {liveLabel}
              </span>
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
              <span
                className='inline-flex items-center px-4 py-1.5 rounded-lg font-heading font-semibold text-xs transition-opacity duration-200 hover:opacity-75'
                style={{
                  backgroundColor: 'var(--proj-btn-bg)',
                  color: 'var(--proj-btn-text)',
                  border: '1.5px solid var(--proj-btn-border)',
                }}
              >
                GitHub
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const CodingProjects = () => {
  return (
    <section
      id='projects'
      className='py-24'
      style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--divider)' }}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight' style={{ color: 'var(--text)' }}>
          Engineering projects
        </h2>
        <p className='text-base font-body mb-16 max-w-md' style={{ color: 'var(--text-muted)' }}>
          I build things to learn. Spanning front-end, full-stack, and creative experiments.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProjects;
