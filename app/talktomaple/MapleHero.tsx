import React from "react";
import Image from "next/image";
import talktomaplehero from "../../public/assets/projects/talktomaple/00_talktomaple_splash.png";

const MapleHero = () => {
	return (
		<section className="w-full pt-[20vh]">
			<div className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center items-center">
				<div>
					<h1 className="text-center">Talk to Maple</h1>
				</div>
				<div className="max-w-[1000px] pt-20 px-5">
					<div className="grid grid-cols-3 gap-4 justify-center text-center bg-[#2C685F] p-5 rounded-xl">
						<div>
							<h3 className="text-xl pb-2 text-[#FAF6F0]">Duration</h3>
							<p className="text-[1rem] text-[#FAF6F0]">8 Weeks</p>
						</div>
						<div>
							<h3 className="text-xl pb-2 text-[#FAF6F0]">My Role</h3>
							<p className="text-[1rem] text-[#FAF6F0]">
								All Product, UX / UI Design & Front-End Development
							</p>
						</div>
						<div>
							<h3 className="text-xl pb-2 text-[#FAF6F0]">Team</h3>
							<p className="text-[1rem] text-[#FAF6F0]">3 Co-Founders</p>
						</div>
					</div>
				</div>
				<div className="max-w-[1000px] py-16">
					<Image
						src={talktomaplehero}
						alt="Talk to Maple hero image"
						className="rounded-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default MapleHero;
