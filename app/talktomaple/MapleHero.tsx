import React from "react";
import Image from "next/image";
import talktomaplehero from "../../public/assets/projects/talktomaple/00_talktomaple_splash.png";

const MapleHero = () => {
	return (
		<section className="w-full">
			<div className="pt-32 pb-10 mx-auto flex justify-center bg-[#efd4ff] mb-16">
				<div className="max-w-[800px]">
					<Image
						src={talktomaplehero}
						alt="Talk to Maple hero image"
						className=""
					/>
				</div>
			</div>
			<div className="max-w-[800px] w-full h-full mx-auto flex flex-col justify-center items-center pb-10 pt-8">
				<div>
					<h1 className="text-center px-2">Talk to Maple</h1>
				</div>
				<div className="max-w-[900px] pt-20 px-5">
					<div className="grid md:grid-cols-4 gap-5 justify-center text-left border border-black p-5 rounded-xl">
						<div>
							<h3 className="mb-2 bg-black rounded-lg text-white pl-2 py-1 sub-heading text-sm">
								My Role
							</h3>
							<p className="text-[1rem]">
								All Product, UX / UI & Front-End Dev
							</p>
						</div>
						<div>
							<h3 className="mb-2 bg-black rounded-lg text-white pl-2 py-1 sub-heading text-sm">
								Team
							</h3>
							<p className="text-[1rem]">Team of 3 Co-Founders</p>
						</div>
						<div>
							<h3 className="mb-2 bg-black rounded-lg text-white pl-2 py-1 sub-heading text-sm">
								Duration
							</h3>
							<p className="text-[1rem]">8 Weeks</p>
						</div>
						<div>
							<h3 className="mb-2 bg-black rounded-lg text-white pl-2 py-1 sub-heading text-sm">
								Tools
							</h3>
							<p className="text-[1rem]">
								Flutterflow, Xano, Firebase
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MapleHero;
