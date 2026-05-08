import React from 'react';
import Hero from './Hero';
import WhatIDo from './WhatIDo';
import CaseStudies from './CaseStudies';
import CodingProjects from './CodingProjects';
import About from './About';
import ExperienceTimeline from './ExperienceTimeline';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <CaseStudies />
      <CodingProjects />
      <About />
      <ExperienceTimeline />
    </main>
  );
};

export default HomePage;
