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
						Hey I'm Kat 👋 A Junior Software Engineer passionate
						about building intuitive, user-friendly interfaces that
						make technology feel effortless. With a background in UX
						/ UI Design and Product Management, I bring a user-first
						mindset to frontend development, ensuring what I build
						isn't just functional - it truly resonates with users.
						<br />
						<br />
						I started in software engineering as a co-founder and
						low-code developer, launching Talk to Maple, an
						AI-powered self-care mobile app. That experience sparked
						my love for coding and crafting great user experiences,
						leading me to earn a Diploma of IT with Coder Academy,
						where I honed my skills in JavaScript, React, and UI
						development.
						<br />
						<br />
						Since then, I've grown my experience through a software
						engineering internship, immersive training with _nology,
						and now my role at Aurecon, where I help embed
						generative AI into intuitive applications - creating
						seamless, accessible, and engaging AI-powered
						experiences. I thrive on collaboration, problem-solving,
						continuous learning and translating complex challenges
						into elegant products that make a real impact.
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
