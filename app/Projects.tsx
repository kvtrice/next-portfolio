import React from "react";
import ProjectTile from "./ProjectTile";

const Projects = () => {
	return (
		<div className="pb-20">
			<div id="projects" className="w-full px-10 pb-28 pt-20">
				<div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center h-full">
					<h2 className="pb-16">Projects</h2>
					<div className="grid md:grid-cols-2 gap-8 rounded-xl">
						<ProjectTile
							title="Sproutly"
							description="Sproutly is a Forum for Plant Lovers; it's a full stack
							app built using MongoDB, Express.js, React.js & Node.js."
							tags={[
								"React.js",
								"Node.js",
								"MongoDB",
								"Express.js",
								"CSS",
								"Bulma",
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
