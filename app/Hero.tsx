import React from "react";

const Hero = () => {
  return (
		<div id="home" className="w-full h-screen text-center bg-gradient-to-br from-pink via-purple to-blue border-b border-black">
			<div className="max-w-[1600px] w-full h-full mx-auto p-2 justify-center items-center flex flex-col">
				<div className="my-9">
					<h1 className="mt-20 py-4">
						I'm{" "}
						<span className="px-4 rounded-lg">
							Kat
						</span>
					</h1>
					<h1 className="pb-5 px-5">
						A Software Engineer.
					</h1>
					<p className="text-xl py-4 max-w-[1000px] m-auto px-10">
						I have a passion for front-end development and building great user experiences, having experience across React.js, JavaScript and CSS.
					</p>
					<a href="#projects">
						<button className="mt-10">
							View My Projects
						</button>
					</a>
				</div>
			</div>
		</div>
  );
};

export default Hero;
