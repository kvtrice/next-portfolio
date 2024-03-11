import React from "react";
import Image from "next/image";
import im4 from "../../public/assets/projects/talktomaple/4_maple_wireframes1.jpg";

const MapleDefine = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center">
			<div>
				<h2 className="sub-heading">Define</h2>
				<h3>Defining the scope of the MVP</h3>
				<br />
				<p>
					To solve the problem at hand, we identified several key
					elements:
				</p>
				<ul>
					<li>
						<strong>Mobile App</strong>
						<br />
						Given our target market of Gen-Z, we wanted to offer
						something easily accessible to as many people as
						possible. With most people worldwide having a mobile in
						their pocket, a mobile application was the best way for
						us to do this.
					</li>
					<br />
					<li>
						<strong>A.I. Powered Journaling</strong>
						<br />
						We wanted to go beyond simple mood check-ins and provide
						an engaging experience. By leveraging AI and carefully
						crafting prompts, we believed we could achieve a fun and
						exciting journaling experience, while maintaining a
						conversational tone.
					</li>
					<br />
					<li>
						<strong>WhatsApp Conversational Style</strong>
						<br />
						Given the familiarity and popularity of the WhatsApp
						design style for conversations, we chose to adopt a
						similar interface for our mobile-based AI conversations.
					</li>
					<br />
					<li>
						<strong>Gamification</strong>
						<br />
						Understanding that Gen-Z seeks entertainment, we decided
						to differentiate our app by gamifying the mental health
						experience. We aimed to create a Duolingo-like
						experience, as gamification not only promotes user
						retention but also helps establish long-term habits.
					</li>
					<br />
					<li>
						<strong>Digital Companion</strong>
						<br />
						We observed the success and positive user feedback of
						mental health applications incorporating digital
						companions. We saw an opportunity to incorporate a
						self-care buddy into our app, which would guide our
						prompt engineering and provide a thematic structure for
						gamification elements such as items and missions.
					</li>
					<br />
				</ul>
				<p>
					Despite our tight 4-week timeline for the first milestone,
					we believed we could achieve these features and demonstrate
					two crucial factors to potential investors. Firstly, our
					ability to build and launch a mobile application without a
					dedicated developer. Secondly this would provide enough
					end-to-end functionality for us to generate some meaningful
					user data to gauge early signals of usage and demand.
					<br />
					<br />I put together some basic wireframes to better
					visualise the direction of the solution given the above:
				</p>
			</div>
			<div>
				<Image
					src={im4}
					alt="Wireframes of the WhatsApp conversational style journaling approach"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="mb-10">
					Wireframes of the WhatsApp conversational style journaling
					approach
				</figcaption>
			</div>
		</section>
	);
};

export default MapleDefine;
