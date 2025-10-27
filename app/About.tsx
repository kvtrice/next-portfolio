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
            Hey I'm Kat 👋 A technology professional with a background that
            spans software engineering, product management, and customer
            experience. I love making complex things feel simple - whether
            that's through an intuitive interface, a clear onboarding flow, or
            thoughtful documentation that really supports users.
            <br />
            <br />
            I've worked across enterprise tools, early-stage startups and B2B
            SaaS platforms where I've led international product launches,
            onboarded early customers, and built experiences that delight and
            engage users.
            <br />
            <br />
            Right now at Aurecon, I'm helping design and build tools that make
            work easier for teams by bringing generative AI into their everyday
            workflows.
            <br />
            <br />
            Outside of work you'll usually find me reading, walking my dog,
            playing board games with my family, or finding some outdoor trails
            to explore 🥾
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
