import React from 'react';
import Image from 'next/image';
import im12 from '../../public/assets/projects/talktomaple/12_maple_welcome.gif';
import im13 from '../../public/assets/projects/talktomaple/13_maple_homescreen.gif';
import im14 from '../../public/assets/projects/talktomaple/14_maple_dailymissions.gif';
import im15 from '../../public/assets/projects/talktomaple/15_maple_promptscreen.jpg';
import im16 from '../../public/assets/projects/talktomaple/16_maple_responsetime.jpg';
import im17 from '../../public/assets/projects/talktomaple/17_maple_redflag.jpg';
import im18 from '../../public/assets/projects/talktomaple/18_maple_threepartjournal.gif';
import im19 from '../../public/assets/projects/talktomaple/19_maple_usersentiment.gif';

const screens = [
  { src: im12, alt: 'Welcome Screen',               caption: 'Welcome Screen' },
  { src: im13, alt: 'Home Screen + Companion',       caption: 'Home Screen + Companion' },
  { src: im14, alt: 'Daily Missions',                caption: 'Daily Missions' },
  { src: im15, alt: 'Journal Prompt Screen',         caption: 'Journal Prompt Screen' },
  { src: im16, alt: 'Response time notification',    caption: 'Response time notification' },
  { src: im17, alt: 'Red flag capture message',      caption: 'Red flag capture message' },
  { src: im18, alt: '3-part Journal Mission',        caption: '3-part Journal Mission in action' },
  { src: im19, alt: 'User sentiment',               caption: 'User sentiment' },
];

const MapleV2 = () => {
  return (
    <section className='flex flex-col'>
      <h2 className='sub-heading'>Deliver</h2>
      <h3 className='mb-4'>Bringing it to life</h3>
      <p className='mb-8'>
        Learning from our MVP, and having gained proficiency in building apps
        in Flutterflow, we were able to build the next version of Talk to
        Maple at speed. This is the version we deployed to the app stores:
      </p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-xl p-4'>
        {screens.map(({ src, alt, caption }) => (
          <div key={caption} className='flex flex-col items-center'>
            <Image
              src={src}
              alt={alt}
              className='w-full h-auto max-h-[400px] object-contain rounded-lg'
            />
            <figcaption className='mt-2 mb-4 text-center text-xs'>{caption}</figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapleV2;
