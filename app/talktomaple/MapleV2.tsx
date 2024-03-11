import React from "react";
import Image from "next/image";
import im12 from "../../public/assets/projects/talktomaple/12_maple_welcome.gif";
import im13 from "../../public/assets/projects/talktomaple/13_maple_homescreen.gif";
import im14 from "../../public/assets/projects/talktomaple/14_maple_dailymissions.gif";
import im15 from "../../public/assets/projects/talktomaple/15_maple_promptscreen.jpg";
import im16 from "../../public/assets/projects/talktomaple/16_maple_responsetime.jpg";
import im17 from "../../public/assets/projects/talktomaple/17_maple_redflag.jpg";
import im18 from "../../public/assets/projects/talktomaple/18_maple_threepartjournal.gif";
import im19 from "../../public/assets/projects/talktomaple/19_maple_usersentiment.gif";

const MapleV2 = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center">
			<div>
				<h2 className="sub-heading">Deliver</h2>
				<h3>Bringing it to life</h3>
				<br />
				<p>
					Learning from our MVP, and having gained proficiency in
					building apps in Flutterflow, we were able to build the next
					version of Talk to Maple at speed. This is the version we
					deployed to the app stores:
				</p>
			</div>
			<div className="grid md:grid-cols-2 gap-4 justify-center items-center py-5 bg-white rounded-xl">
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im12}
						alt="Welcome Screen"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">Welcome Screen</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im13}
						alt="Home Screen + Companion"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Home Screen + Companion
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im14}
						alt="Daily Missions"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">Daily Missions</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im15}
						alt="Journal Prompt Screen"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Journal Prompt Screen
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im16}
						alt="Response time notification"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Response time notification
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im17}
						alt="Red flag capture message"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Red flag capture message
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im18}
						alt="3-part Journal Mission in action"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						3-part Journal Mission in action
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im19}
						alt="User sentiment"
						className="object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">User sentiment</figcaption>
				</div>
			</div>
		</section>
	);
};

export default MapleV2;
