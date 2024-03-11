"use client";
import React from "react";
import MapleOverview from "./MapleOverview";
import MapleChallengeGoal from "./MapleChallengeGoal";
import MapleDiscover from "./MapleDiscover";
import MapleDefine from "./MapleDefine";
import MapleRevisedApproach from "./MapleRevisedApproach";
import MapleMVP from "./MapleMVP";
import MapleMVPLearnings from "./MapleMVPLearnings";
import MapleV2 from "./MapleV2";
import MapleResults from "./MapleResults";
import MapleHero from "./MapleHero";
import MapleFinalThoughts from "./MapleFinalThoughts";

const MapleCaseStudy = () => {
	return (
		<div className="w-full bg-white">
			<div className="max-w-[1000px] flex flex-col mx-auto">
				<div className=" w-full p-10 justify-center items-center">
					<MapleHero />
					{/* Overview */}
					<MapleOverview />
					{/* Challenge & Goal */}
					<MapleChallengeGoal />
					{/* Discover */}
					<MapleDiscover />
					{/* Define */}
					<MapleDefine />
					{/* Revising our approach */}
					<MapleRevisedApproach />
					{/* MVP */}
					<MapleMVP />
					{/* MVP Learnings */}
					<MapleMVPLearnings />
					{/* Bringing it to Life */}
					<MapleV2 />
					{/* Outcome */}
					<MapleResults />
					{/* Final Thoughts */}
					<MapleFinalThoughts />
				</div>
			</div>
		</div>
	);
};

export default MapleCaseStudy;
