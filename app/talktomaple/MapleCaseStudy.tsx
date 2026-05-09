'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';
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

const CONTENT = 'py-16 px-5 max-w-[800px] mx-auto w-full';
const DIV     = { borderTop: '1px solid var(--divider)' } as React.CSSProperties;

const MapleCaseStudy = () => {
  const { theme } = useTheme();

  /* Dark: subtle purple on charcoal (already good per feedback)
     Light: greatly softened — barely a shade off white        */
  const tintBg = theme === 'dark'
    ? 'rgba(88,28,135,0.08)'
    : 'rgba(139,92,246,0.04)';

  const plain  = (children: React.ReactNode) => (
    <div style={DIV}><div className={CONTENT}>{children}</div></div>
  );
  const tinted = (children: React.ReactNode) => (
    <div style={{ ...DIV, backgroundColor: tintBg }}>
      <div className={CONTENT}>{children}</div>
    </div>
  );

  return (
    <div className='w-full'>
      <MapleHero />

      {/* Overview + Challenge flow together as one opening section — no divider at top */}
      <div>
        <div className={CONTENT}><MapleOverview /></div>
        <div className={CONTENT} style={DIV}><MapleChallengeGoal /></div>
      </div>

      {/* Alternating sections from Discover onwards */}
      {tinted(<MapleDiscover />)}
      {plain(<MapleDefine />)}
      {tinted(<MapleRevisedApproach />)}
      {plain(<MapleMVP />)}
      {tinted(<MapleMVPLearnings />)}
      {plain(<MapleV2 />)}
      {tinted(<MapleResults />)}
      {plain(<MapleFinalThoughts />)}
    </div>
  );
};

export default MapleCaseStudy;
