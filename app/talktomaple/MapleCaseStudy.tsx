'use client';
import React from 'react';
import MapleOverview from './MapleOverview';
import MapleChallengeGoal from './MapleChallengeGoal';
import MapleDiscover from './MapleDiscover';
import MapleDefine from './MapleDefine';
import MapleRevisedApproach from './MapleRevisedApproach';
import MapleMVP from './MapleMVP';
import MapleMVPLearnings from './MapleMVPLearnings';
import MapleV2 from './MapleV2';
import MapleResults from './MapleResults';
import MapleHero from './MapleHero';
import MapleFinalThoughts from './MapleFinalThoughts';

const SECTION = 'py-16 px-5 max-w-[800px] mx-auto w-full';
const SECTION_TINTED = 'py-16 px-5 bg-purple/10 w-full';
const INNER = 'max-w-[800px] mx-auto w-full';

const MapleCaseStudy = () => {
  return (
    <div className='w-full'>
      <MapleHero />

      <div className={SECTION}><MapleOverview /></div>

      <div className={SECTION_TINTED}><div className={INNER}><MapleChallengeGoal /></div></div>

      <div className={SECTION}><MapleDiscover /></div>

      <div className={SECTION_TINTED}><div className={INNER}><MapleDefine /></div></div>

      <div className={SECTION}><MapleRevisedApproach /></div>

      <div className={SECTION_TINTED}><div className={INNER}><MapleMVP /></div></div>

      <div className={SECTION}><MapleMVPLearnings /></div>

      <div className={SECTION_TINTED}><div className={INNER}><MapleV2 /></div></div>

      <div className={SECTION}><MapleResults /></div>

      <div className={SECTION_TINTED}><div className={INNER}><MapleFinalThoughts /></div></div>
    </div>
  );
};

export default MapleCaseStudy;
