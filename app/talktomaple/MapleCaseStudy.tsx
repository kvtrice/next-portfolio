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
		<div className="w-full">
			<div className="flex flex-col mx-auto">
				<div className=" w-full justify-center items-center">
					<MapleHero />
					<div className="pt-10 px-5">
						{/* Overview */}
						<MapleOverview />
					</div>
					<div className="py-10 px-5">
						{/* Challenge & Goal */}
						<MapleChallengeGoal />
					</div>
					<div className="bg-purple/15 py-10 px-5">
						{/* Discover */}
						<MapleDiscover />
					</div>
					<div className="py-20 px-5">
						{/* Define */}
						<MapleDefine />
					</div>
					<div className="bg-purple/15 py-20 px-5">
						{/* Revising our approach */}
						<MapleRevisedApproach />
					</div>
					<div className="py-20 px-5">
						{/* MVP */}
						<MapleMVP />
					</div>
					<div className="bg-purple/15 py-20 px-5">
						{/* MVP Learnings */}
						<MapleMVPLearnings />
					</div>
					<div className="py-20 px-5">
						{/* Bringing it to Life */}
						<MapleV2 />
					</div>
					<div className="bg-purple/15 py-20 px-5">
						{/* Outcome */}
						<MapleResults />
					</div>
					<div className="py-20 px-5">
						{/* Final Thoughts */}
						<MapleFinalThoughts />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapleCaseStudy;
