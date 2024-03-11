import React from "react";
import Image from "next/image";
import im7 from "../../public/assets/projects/talktomaple/7_maple_mvp1.png";
import im8 from "../../public/assets/projects/talktomaple/8_maple_mvpvideo.gif";
import im9 from "../../public/assets/projects/talktomaple/9_maple_mvpretention.jpg";

const MapleMVP = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center">
			<div>
				<h2 className="sub-heading">Develop</h2>
				<h3>Launching the MVP</h3>
				<br />
				<p>
					We spent 3 weeks defining, designing, building and launching
					the MVP of our app. Once deployed to the app stores we ran
					some targeted facebook ads to attract our first cohort of
					users and begin getting some real customer feedback.
				</p>
				<br />
			</div>
			<div className="grid md:grid-cols-2 gap-4 justify-center items-center pb-8">
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im7}
						alt="Journal Prompt Select"
						className="rounded-xl mb-3 object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Journal Prompt Select
					</figcaption>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={im8}
						alt="Bite-sized Journal Session"
						className="rounded-xl mb-3 object-fit max-h-[550px] w-auto"
					/>
					<figcaption className="mb-10">
						Bite-sized Journal Session
					</figcaption>
				</div>
			</div>
			<div>
				<p>
					We had positive early signals, with a low Cost Per Click
					(CPC), showing that our <strong>ad was effective</strong>,
					and we gained
					<strong>85 users</strong> in the first week of our MVP being
					live (users in this scenario = people that downloaded,
					opened and completed at least 1 journaling session within
					the app).
					<br />
					<br />
					We had achieved our initial goal of launching an app, and
					proved that our value prop did convert and we could get
					users to download and use the app. There was interest! We
					next sought to focus on improving retention and engagement,
					as we saw a steep decline in usage after day 1.
				</p>
				<br />
			</div>
			<div>
				<Image
					src={im9}
					alt="Graph showing percentage of users that completed a journal mission vs. # of days after first install"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="mb-10">
					Percentage of users that completed a journal mission vs. #
					of days after first install
				</figcaption>
			</div>
			<div>
				<h3>Managing Open A.I outages... lots of them</h3>
				<br />
				<p>
					During the initial days of our MVP launch, ChatGPT
					experienced frequent outages and errors. Users were often
					affected, receiving confusing error messages that deterred
					them from returning to the app. This created an overall poor
					user experience.
					<br />
					To address this issue, we added a fallback mechanism with a
					hardcoded message that aligned with the brand and companion.
					This approach seemed to have a positive impact on user
					retention; the inclusion of a message from the companion
					saying{" "}
					<em>
						"I'm just having a nap, puppies need their beauty sleep.
						Come back soon!"
					</em>{" "}
					actually encouraged 2 users to return to the app the
					following day asking Maple the companion{" "}
					<em>"Are you awake yet?"</em>. 🐶
				</p>
				<br />
			</div>
		</section>
	);
};

export default MapleMVP;
