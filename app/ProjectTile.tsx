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
			<div className="md:items-start flex-col justify-between">
				<div className="overflow-hidden rounded-t-xl">
					{image && (
						<Image
							src={image}
							alt={`${title} project image`}
							width={0}
							height={0}
							sizes="100vw"
							className="object-cover"
							style={{ width: "100%", height: "auto" }}
						/>
					)}
				</div>
				<div className="mb-2 flex flex-col items-center md:items-start p-5">
					<h3 className="text-2xl mt-1 pb-2">{title}</h3>
					<p className="pb-4 text-center md:text-start">
						{description}
					</p>
					<div className="flex flex-wrap items-center justify-center md:items-left md:justify-normal pb-4">
						{tags.map((tag) => (
							<div
								key={tag}
								className="transition-colors ease-in-out duration-200 hover-bg rounded-xl px-2 py-[0.1rem] bg-black text-white text-sm tracking-widest mr-[0.5rem] my-1 translate-x-1 translate-y-1"
							>
								{tag}
							</div>
						))}
					</div>
					<div className="flex items-center justify-center md:items-start md:justify-normal">
						{liveSiteUrl && (
							<Link href={liveSiteUrl} target="_blank">
								<button className="p-2 mr-3 cursor-pointer bg-highlight border-highlight">
									See Live
								</button>
							</Link>
						)}
						{githubUrl && (
							<Link href={githubUrl} target="_blank">
								<button className="p-2 mr-3 cursor-pointer border-pink">
									Github
								</button>
							</Link>
						)}
						{caseStudyUrl && (
							<Link href={caseStudyUrl} target="_blank">
								<button className="p-2 mr-3 cursor-pointer border-pink">
									See Case Study
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
