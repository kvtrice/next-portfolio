import React from 'react';
import MapleCaseStudy from './MapleCaseStudy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to Maple',
  description:
    'Case study: Talk to Maple — a gamified AI journaling app built during Antler Australia\'s pre-seed accelerator. 200+ downloads, 95% positive sentiment, shipped in 8 weeks.',
  openGraph: {
    title: 'Talk to Maple | Katrice Mountford',
    description:
      'Case study: a gamified AI journaling app for Gen-Z mental health. Built from zero to app store in 8 weeks during Antler Australia.',
  },
};

const talktomaple = () => {
  return (
    <div>
      <MapleCaseStudy />
    </div>
  );
};

export default talktomaple;
