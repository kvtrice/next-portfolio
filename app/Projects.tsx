import React from "react";
import ProjectTile from "./ProjectTile";

const Projects = () => {
	return (
		<div className="pb-20">
			<div
				id="projects"
				className="w-full px-10 pb-28 md:pt-20"
			>
				<div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center h-full">
					<h2 className="pb-16">Projects</h2>
					<div className="grid md:grid-cols-2 gap-8 rounded-xl">
						<ProjectTile
							image="/assets/project-tiles/to-do.jpg"
							title="To-do Task Tracker"
							description="A full stack to-do application where users can add, edit, duplicate and archive tasks."
							tags={[
								"TypeScript",
								"React",
								"Java",
								"Spring Boot",
								"PostgreSQL",
							]}
							liveSiteUrl="https://kats-todo-app.vercel.app/"
							githubUrl="https://github.com/kvtrice/todo-app"
						/>
						<ProjectTile
							image="/assets/project-tiles/Sproutly.gif"
							title="Sproutly Forum"
							description="Sproutly is a Forum for Plant Lovers; it's a full stack
							app built using MongoDB, Express.js, React.js & Node.js."
							tags={[
								"React",
								"Node",
								"MongoDB",
								"Express",
								"CSS",
								"ViTest",
							]}
							liveSiteUrl="https://sproutlyapp.vercel.app/"
							githubUrl="https://github.com/kvtrice/sproutly-frontend"
						/>
						<ProjectTile
							image="/assets/project-tiles/techie-trinkets.jpg"
							title="Techie Trinkets e-Shop"
							description="An e-commerce shop front allowing users to browse, favourite and checkout various tech gadgets."
							tags={[
								"React",
								"React-router",
								"Sass",
								"BEM",
								"Firebase Firestore",
							]}
							liveSiteUrl="https://techie-trinkets.vercel.app/"
							githubUrl="https://github.com/kvtrice/techie-trinkets-eShop"
						/>
						<ProjectTile
							image="/assets/project-tiles/google-books.jpg"
							title="Google Books Search Engine"
							description="A web app consuming the google books API, allowing users to search and browse for books"
							tags={["React", "Sass", "Google Books API"]}
							liveSiteUrl="https://google-book-search-theta.vercel.app/"
							githubUrl="https://github.com/kvtrice/books-search-engine"
						/>
						<ProjectTile
							image="/assets/project-tiles/morse-code.jpg"
							title="Morse Code Translater"
							description="A Morse Code Translator that allows users to translate between English and Morse code in real-time"
							tags={["HTML", "Sass", "BEM", "Javascript", "Jest"]}
							liveSiteUrl="https://morse-code-translator-ten.vercel.app/"
							githubUrl="https://github.com/kvtrice/morse-code-translator"
						/>
						<ProjectTile
							image="/assets/project-tiles/windows-98.jpg"
							title="Windows 98 OS"
							description="A simulated version of Windows 98 OS complete with various working applications"
							tags={["HTML", "CSS", "Sass", "Javascript"]}
							liveSiteUrl="https://windows-98-os.vercel.app/"
							githubUrl="https://github.com/kvtrice/windows-98-OS"
						/>
						<ProjectTile
							image="/assets/project-tiles/talktomaple.jpg"
							title="Talk to Maple"
							description="A gamified Journaling Mobile Appl, powered by A.I. built during Antler Australia's Startup Accelerator Program."
							tags={[
								"Flutterflow",
								"Xano",
								"Firebase Auth",
								"Open AI API",
							]}
							caseStudyUrl="/talktomaple"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
