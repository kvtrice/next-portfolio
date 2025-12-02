'use client';

import React from 'react';
const Hero = () => {
  return (
    <div id='home' className='hero border-b relative overflow-hidden'>
      <div className='max-w-[1600px] text-center w-full h-screen mx-auto p-2 justify-center items-center flex flex-col'>
        {/* Blurry blobs behind text */}
        <div className='inset-0 flex justify-center items-center'>
          <div className='absolute top-1/2 left-1/4 transform -translate-x-48% -translate-y-1/2 z-0 ease-in-out transition-transform duration-300'>
            <div className='w-72 h-72 lg:h-96 lg:w-96 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 z-0'></div>
          </div>
          <div className='absolute top-1/2 right-1/4 transform translate-x-48% -translate-y-1/2 z-0 ease-in-out transition-transform duration-300'>
            <div className='w-72 h-72 lg:h-96 lg:w-96 bg-pink rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-8000 z-0'></div>
          </div>
          <div className='absolute top-1/2 transform -translate-y-1/2 z-0 ease-in-out transition-transform duration-300'>
            <div className='w-72 h-72 lg:h-96 lg:w-96 bg-highlight rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob z-0'></div>
          </div>
        </div>
        {/* Hero content */}
        <div className='my-9 z-10'>
          <h1 className='mt-20 py-4'>Hey I'm Kat,</h1>
          <h1 className='pb-5 px-5'>A Product Manager</h1>
          <h3 className='pb-5 px-20'>
            with a background across software engineering, AI and Product
            Design, specialising in translating complex problems into simple
            solutions.
          </h3>
          <a href='#projects'>
            <button className='mt-10'>View My Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
