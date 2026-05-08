import React from 'react';
import Image from 'next/image';
import talktomaplehero from '../../public/assets/projects/talktomaple/00_talktomaple_splash.png';

const MapleHero = () => {
  return (
    <section className='w-full'>
      {/* Splash image */}
      {/* Dark container matches the case study card on the homepage */}
      {/* Swap src to the transparent PNG when available */}
      <div className='w-full flex justify-center items-center' style={{ backgroundColor: '#1C1040', minHeight: '400px' }}>
        <div className='max-w-[700px] w-full px-8 py-16'>
          <Image
            src={talktomaplehero}
            alt='Talk to Maple hero image'
            className='w-full h-auto object-contain'
          />
        </div>
      </div>

      {/* Title + meta */}
      <div className='max-w-[800px] w-full mx-auto px-5 py-12'>
        <h1 className='text-center text-5xl sm:text-7xl lg:text-[90px] font-bold mb-12 leading-tight'>
          Talk to Maple
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 border border-black p-5 rounded-xl'>
          {[
            { label: 'My Role', value: 'All Product, UX / UI & Front-End Dev' },
            { label: 'Team',     value: 'Team of 3 Co-Founders' },
            { label: 'Duration', value: '8 Weeks' },
            { label: 'Tools',    value: 'Flutterflow, Xano, Firebase' },
          ].map(({ label, value }) => (
            <div key={label}>
              <h3 className='mb-2 bg-black rounded-lg text-white pl-2 py-1 sub-heading text-sm'>
                {label}
              </h3>
              <p className='text-[0.95rem] leading-6'>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapleHero;
