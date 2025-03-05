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
						Hey, I'm Kat 👋
						<br />
						<br />
						I'm a Product Manager with a background in Product
						Management, UX Design, and Software Engineering. I'm
						passionate about solving real customer problems and
						bridging the gap between business needs, user goals, and
						technical feasibility to create products that deliver
						real impact.
						<br />
						<br />
						I thrive in customer-driven environments, using agile
						methodologies, backlog management, and data-driven
						insights to turn ideas into actionable, high-impact
						solutions. By working closely with stakeholders, I
						ensure seamless collaboration between teams to build
						products that truly matter.
						<br />
						<br />
						<strong>What I Do Best:</strong>
						<br />
						📝 Define & prioritise requirements to streamline
						delivery and reduce bottlenecks
						<br />
						🎯 Turn user needs & business goals into actionable
						product decisions
						<br />
						👩‍💻 Align business strategy with technical execution
						through cross-functional collaboration
						<br />
						<br />
						Currently completing an MBA, I'm deepening my expertise
						in business strategy and operational problem-solving to
						enhance my impact even further.
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
