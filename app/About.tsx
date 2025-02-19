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
						Hey I'm Kat, a Software Engineer with a strong
						foundation in Product Management and a passion for
						building impactful, user-focused solutions.
						<br />
						<br />
						After 8 years in tech, including 4+ years as a PM in B2B
						SaaS, I transitioned into software engineering to deepen
						my technical expertise and contribute more directly to
						building great products.
						<br />
						<br />
						My journey began when I built and launched a low-code
						mobile app through a startup accelerator program,
						followed by upskilling via intensive bootcamps and
						working hands-on with full-stack technologies.
						<br />
						<br /> Now, I bring a unique blend of technical skills,
						product thinking, and customer obsession to everything I
						build. With an ability to bridge the gap between
						engineering and product, I thrive in solving complex
						problems and creating software that delivers real
						impact ✨
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
