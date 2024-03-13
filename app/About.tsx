import React from "react";
import Image from "next/image";

const About = () => {
  return (
		<div className="">
			<div
				id="about"
				className="w-full p-2 py-16 max-w-[1100px] m-auto flex justify-center items-center flex-col"
			>
				<h2 className="px-5 pb-10">About</h2>
				<div className="grid md:grid-cols-3 grid-cols-1 md:p-0 place-items-center m-10 lg:m-0">
					<p className="col-span-2 order-last md:order-first text-center md:pr-8 md:text-left pt-8 md:pt-0 leading-8 text-[#484138]">
						As a recent graduate and Junior Software Engineer, I've
						learnt the fundamentals of full-stack development;
						specialising in the Front-End with skills across
						React.js, JavaScript and CSS to craft engaging web
						applications.
						<br />
						<br />
						Before transitioning into software engineering, I spent
						four years as a Product Manager & Designer in B2B SaaS
						companies, leading strategic initiatives, orchestrating
						international product launches, and spearheading
						user-centric solutions.
						<br />
						<br />I also co-founded and launched an A.I powered
						self-care app, Talk to Maple, which garnered hundreds of
						downloads from early users. My diverse background equips
						me with a unique blend of technical prowess, strategic
						thinking, and creative insight to deliver exceptional
						user experiences that resonate.
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
						<button className="w-[100%] rounded-none">
							<a
								href="/katrice_mountford_resume.pdf"
								download="katrice-mountford-resume"
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
