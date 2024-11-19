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
						I'm a Product Manager with nearly 8 years of experience
						in the tech industry, including 4+ years as a PM
						delivering impactful solutions in B2B SaaS companies. My
						career is driven by a passion for improving users'
						lives, combining empathy, strategic thinking, and
						innovative problem-solving.
						<br />
						<br />
						A recent chapter of my journey involved hands-on
						technical experience in full-stack development, where I
						enhanced my ability to connect user needs, business
						goals, and technical feasibility. This unique blend of
						skills enables me to deliver user-focused solutions that
						resonate with customers.
						<br />
						<br />
						I bring a strong foundation in product strategy, user
						research, and intuitive UX design, complemented by
						technical proficiency in React, Next.js,
						JavaScript/TypeScript, Node.js, Express, SQL, HTML, and
						CSS. This combination allows me to bridge the gap
						between product and engineering, ensuring we arrive at
						the best solution for the ideal customer outcome.
						<br />
						<br />I thrive on creating meaningful solutions that
						empower users and make a difference, working at the
						intersection of strategy, design, and technology to
						bring big ideas to life. ✨
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
