import React from "react";
import Link from "next/link";
import { Project } from "@/definitions";
import Image from "next/image";

const ProjectTile = ({
	title,
	description,
	image,
	tags,
	githubUrl,
	liveSiteUrl,
	caseStudyUrl,
}: Project) => {
	return (
		<div className="flex flex-col shadow-md shadow-gray-200 border-black border hover:shadow-xl hover:scale-105 rounded-xl w-full transition-all ease-in-out duration-300">
			<div
				className="overflow-hidden rounded-t-xl"
				style={{ height: "60%" }}
			>
				{image && (
					<Image
						src={image}
						alt={`${title} project image`}
						width={0}
						height={0}
						sizes="100vw"
						className="object-cover h-full w-full"
					/>
				)}
			</div>
			<div className="mb-2 flex flex-col justify-between flex-grow p-5">
				<div>
					<h3 className="text-2xl mt-1 pb-2 font-semibold text-center md:text-start">
						{title}
					</h3>
					<p className="pb-5 text-center md:text-start">
						{description}
					</p>
					<div className="flex flex-wrap items-center justify-center md:items-left md:justify-normal pb-8">
						{tags.map(tag => (
							<div
								key={tag}
								className="transition-all ease-in-out duration-200 hover-bg rounded-md px-3 py-1 border border-black bg-gray-700 shadow-md text-white font-heading text-sm font-thin tracking-widest mr-[0.5rem] my-1"
							>
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center justify-center md:items-start md:justify-normal mt-auto">
					{liveSiteUrl && (
						<Link
							href={liveSiteUrl}
							target="_blank"
						>
							<button className="mr-3 px-6 py-3 cursor-pointer bg-highlight border-highlight">
								See Live
							</button>
						</Link>
					)}
					{githubUrl && (
						<Link
							href={githubUrl}
							target="_blank"
						>
							<button className="px-6 py-3 cursor-pointer border-pink">
								Github
							</button>
						</Link>
					)}
					{caseStudyUrl && (
						<Link
							href={caseStudyUrl}
							target="_blank"
						>
							<button className="px-6 py-3 cursor-pointer border-pink">
								See Case Study
							</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
