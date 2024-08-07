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
						I'm a Junior Software Engineer with over 7 years of
						experience in the tech industry. Most recently I've
						worked as a Product Manager in B2B SaaS companies, where
						I spent over 4 years collaborating closely with
						development teams to drive strategic initiatives and
						product launches.
						<br />
						<br />
						A pivotal moment in my career was participating in a
						startup accelerator program. This experience, where I
						quickly built and launched a mobile app using low-code
						tools, inspired me to formally retrain as a Software
						Engineer.
						<br />
						<br />
						I completed a 6-month coding bootcamp, earning a Diploma
						of IT, and joined _nology, a program renowned for its
						commitment to diversity. I'm also currently completing a
						Bachelor of Computer Science as I continue to grow my
						skills.
						<br />
						<br />
						With a strong foundation in full-stack development and a
						focus on frontend technologies, my skills include React, Next.js,
						JavaScript/TypeScript, Node.js, Express, SQL, HTML, and CSS. I thrive on creating
						intuitive user experiences and bringing solutions
						to life that make an impact. ✨
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
