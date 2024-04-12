import React from "react";
import Image from "next/image";

const About = () => {
  return (
		<div className="">
			<div
				id="about"
				className="w-full p-2 py-16 max-w-[1100px] m-auto flex justify-center items-center flex-col"
			>
				<h2 className="px-5 md:pb-10">About</h2>
				<div className="grid md:grid-cols-3 grid-cols-1 md:p-0 place-items-center m-10 lg:m-0">
					<p className="col-span-2 order-last md:order-first text-center md:pr-8 md:text-left pt-8 md:pt-0 leading-8 text-[#484138]">
						I'm a Junior Software Engineer with 7 years experience in the tech industry. I've worked as  product Manager for over 4 years and have recently re-trained as a Software Engineer with ~1 year of hands-on tech experience.
						<br />
						<br />
						As a recent software engineering graduate I've
						learnt the fundamentals of full-stack development;
						with experience across React, JavaScript / Typescript, Node, Express, MongoDB, Python, Flask, PostgreSQL, SQL, HTML & CSS.
						<br />
						<br />
						And as a Product Manager I've led strategic initiatives, spearheaded
						international product launches, and taken product roadmaps from inception through to successful execution.
						<br />
						<br />Alongside experience founding my own startup, my diverse background enables me to solve complex challenges and collaborate seamlessly across cross-functional teams to deliver impactful solutions that customers love. 
					</p>
					<div className="flex flex-col items-center justify-center w-full">
						<Image
							src="/assets/kat.png"
							alt="Picture of Katrice Mountford"
							width={600}
							height={600}
							style={{
								objectFit: "cover",
								fill: "true",
							}}
							className="pt-5 rounded-t-full bg-pink border-t border-r border-l border-black"
						/>
						<button className="w-[100%] max-w-[600px] bg-blue rounded-none">
							<a
								href="/katrice_mountford_resume.pdf"
								download="katrice_mountford_resume"
							>
								Download Resume
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
  );
};

export default About;
