import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className=''>
      <div
        id='about'
        className='w-full p-2 py-16 max-w-[1100px] m-auto flex justify-center items-center flex-col'
      >
        <h2 className='px-5 md:pb-10'>About</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 md:p-0 place-items-center m-10 lg:m-0'>
          <p className='col-span-2 font-normal order-last md:order-first text-center md:pr-8 md:text-left pt-8 md:pt-0 leading-8 text-[#484138]'>
            Hey I'm Kat 👋 A Product Manager who likes making things clearer,
            simpler, and easier for people to use. Most of my work sits at the
            intersection of product, design, and engineering. I enjoy diving
            into messy or unclear problems, understanding what people are
            actually trying to do and then shaping a solution that genuinely
            helps.
            <br />
            <br />
            My background includes product management, UX thinking, and enough
            hands-on engineering to collaborate closely with developers and
            understand what's feasible. I'm not precious about where ideas come
            from - I care more about whether the end result helps someone and
            solves the real problem.
            <br />
            <br />
            I'm motivated by meaningful, human-impact work. I like building
            products that make someone's job easier, save time, reduce confusion
            or help a team work better together. I'm also a continuous learner.
            Over the years I've built skills across software engineering, AI
            tooling, psychology and neuroscience - mostly because I'm curious
            and want to understand how things (and people) work. That curiosity
            helps me ask better questions and make more grounded product
            decisions.
            <br />
            <br />
            At the core, I like creating clarity. Whether it's a feature, a
            workflow, a roadmap or a conversation - I want the end result to
            feel organised, purposeful and easy to navigate. And when I'm not
            focussed on that, outside of work you'll usually find me reading,
            walking my dog, playing board games with my family, or finding some
            outdoor walks to explore 🥾
          </p>
          <div className='flex flex-col items-center justify-center w-full'>
            <Image
              src='/assets/kat.png'
              alt='Picture of Katrice Mountford'
              width={600}
              height={600}
              style={{
                objectFit: 'cover',
                fill: 'true',
              }}
              className='pt-5 rounded-t-full bg-blue border-t border-r border-l border-black'
            />
            <button className='w-[100%] max-w-[600px] bg-pink rounded-none'>
              <a
                href='/katrice_mountford_resume.pdf'
                download='katrice_mountford_resume'
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
