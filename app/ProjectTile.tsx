import React from "react";
import Link from "next/link";
import { Project } from "@/definitions";

const ProjectTile = ({ title, description, tags, githubUrl, liveSiteUrl }: Project) => {
	return (
		<div className="flex flex-col flex-wrap shadow-md hover:shadow-xl rounded-xl w-full">
			<div className="p-5 md:items-start flex-col">
				<div className="pb-3 flex flex-col items-center md:items-start">
					<h3 className="text-2xl pb-2">{title}</h3>
					<p className="pb-4 text-center md:text-start">
						{description}
					</p>
					<div className="flex flex-wrap items-center justify-center md:items-left md:justify-normal pb-4">
						{tags.map((tag) => (
							<div className="border rounded-xl px-2 bg-gradient-to-br from-pink via-purple to-blue border-b mr-1 my-1">
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center justify-center md:items-start md:justify-normal">

				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
