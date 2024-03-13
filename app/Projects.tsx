import React from "react";
import ProjectTile from "./ProjectTile";

const Projects = () => {
	return (
		<div className="pb-20">
			<div id="projects" className="w-full px-10 pb-28 md:pt-20">
				<div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center h-full">
					<h2 className="pb-16">Projects</h2>
					<div className="grid md:grid-cols-2 gap-8 rounded-xl">
						<ProjectTile
							image="/assets/project-tiles/Sproutly.gif"
							title="Sproutly"
							description="Sproutly is a Forum for Plant Lovers; it's a full stack
							app built using MongoDB, Express.js, React.js & Node.js."
							tags={[
								"React.js",
								"Node.js",
								"MongoDB",
								"Express.js",
								"CSS",
								"ViTest",
							]}
							liveSiteUrl="https://sproutlyapp.vercel.app/"
							githubUrl="https://github.com/kvtrice/sproutly-frontend"
						/>
						<ProjectTile
							image="/assets/project-tiles/skin-stack.jpg"
							title="Skin Stack"
							description="An API Webserver for Skin Stack; a simple Skincare Routine Tracking app"
							tags={["Python", "Flask"]}
							githubUrl="https://github.com/kvtrice/skin-stack"
						/>
						<ProjectTile
							image="/assets/project-tiles/mealplanner.gif"
							title="Meal Planner"
							description="A Python terminal application that helps you plan your meals based on a specified calorie target, for any number of days."
							tags={["Python", "Bash"]}
							githubUrl="https://github.com/kvtrice/meal-planner"
						/>
						<ProjectTile
							image="/assets/project-tiles/talktomaple.jpg"
							title="Talk to Maple"
							description="A gamified Journaling Mobile Appl, powered by A.I. built during Antler Australia's Startup Accelerator Program."
							tags={["Flutterflow", "Xano", "Firebase Auth"]}
							caseStudyUrl="/talktomaple"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
