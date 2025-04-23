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
					<p className="col-span-2 font-normal order-last md:order-first text-center md:pr-8 md:text-left pt-8 md:pt-0 leading-8 text-[#484138]">
						Hey I'm Kat 👋 A frontend-leaning Software Engineer
						passionate about building intuitive, user-first
						interfaces that make technology feel effortless.
						<br />
						<br />
						I started in tech through product and design, and that
						background still shapes how I approach development
						today: clear thinking, user-first decisions, and a love
						of clean, considered interfaces. I've worked on
						AI-powered journaling apps, knowledge-sharing tools,
						dashboards, e-commerce prototypes, and more — always
						with an eye on making tech more accessible, intuitive,
						and human.
						<br />
						<br />
						Right now, I'm building frontend experiences at Aurecon,
						where I help turn generative AI into useful, usable
						products for real people. I'm particularly passionate
						about working in cross-functional teams, translating
						ideas into code, and constantly learning new ways to
						solve real problems.
						<br />
						<br />
						Outside of work, you'll usually find me reading, walking
						my dog, playing board games with my family or finding
						some outdoor walks or hikes to explore 🥾
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
							className="pt-5 rounded-t-full bg-blue border-t border-r border-l border-black"
						/>
						<button className="w-[100%] max-w-[600px] bg-pink rounded-none">
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
