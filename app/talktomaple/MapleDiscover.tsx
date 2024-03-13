import React from "react";
import Image from "next/image";
import im1 from "../../public/assets/projects/talktomaple/1_maple_survey.png";
import im2 from "../../public/assets/projects/talktomaple/2_maple_research.png";
import im3 from "../../public/assets/projects/talktomaple/3_maple_competitors.jpg";

const MapleDiscover = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center max-w-[750px] mx-auto">
			<div>
				<h2 className="sub-heading">Discover</h2>
				<h3>Understanding the problem</h3>
				<br />
				<p>
					<p>
						I began discovery by outlining the key goals we had for
						this phase. In particular I wanted to understand:
					</p>
					<br />
					<ol className="case-study-ol">
						<li>
							What currently works for young people when needing
							mental health support
						</li>
						<li>
							The competitive landscape including common design
							themes and any gaps in the market
						</li>
						<li>
							What others are saying around this issue online and
							elsewhere (mental health forums etc.)
						</li>
					</ol>
					<br />
					<p>
						We conducted user interviews and ran surveys targeting
						young people impacted by mental health to learn more.
						These activities helped us uncover some key insights:
					</p>
					<br />
					<ul className="case-study-ul">
						<li>
							<strong>Gen-Z care</strong> about supporting their
							mental health, and are happy to try new things to do
							so
						</li>
						<li>
							<strong>Talking</strong> was the most impactful
							activity that anecdotally helped when in need of
							support
						</li>
						<li>
							Mental health support doesn't feel easily
							<strong>accessible</strong>
						</li>
						<li>
							People don't always want to{" "}
							<strong>'burden'</strong> people close to them with
							their issues
						</li>
						<li>
							Gen-Z want to be <strong>entertained</strong>
						</li>
					</ul>
					<br />
				</p>
			</div>
			<div className="pb-16 pt-8">
				<div className="case-image">
					<Image
						src={im1}
						alt="Summary of Survey conducted with Gen-Z participants"
						className="pb-6"
					/>
					<Image
						src={im2}
						alt="Summary of Gains and Pains found from research"
						className="pb-4"
					/>
					<figcaption className="pb-10">
						Summary of Gen-Z user research findings
					</figcaption>
				</div>
			</div>
			<div>
				<h3>Researching the Competitors</h3>
				<br />
				<p>
					For competitive analysis, I focussed on top-rated journaling
					apps, entertainment based mental health support apps (e.g.
					chatbots), mood trackers and digital self care companion
					apps.
					<br />
					This helped me identify
					<strong>common design patterns</strong> we can utilise and
					take inspiration from, as these will already be familiar to
					our users and will reduce friction and cognitive load. These
					included:
				</p>
				<br />
				<ul className="case-study-ul">
					<li>
						Pre-set journal prompts, providing some guidance and
						direction for the user to get started
					</li>
					<li>
						A daily challenge or mission (+ rewards) to encourage
						users to return
					</li>
					<li>
						Utilising a WhatsApp style of messaging with chatbots,
						an easily recognisable and known format for users
					</li>
				</ul>
				<br />
				<p>
					The analysis also helped me identify some promising
					<strong>opportunities</strong>
					for us to improve on the experience for users as well:
				</p>
				<br />
				<ul className="case-study-ul">
					<li>
						<strong>Lack of A.I.</strong> - most mental health
						chatbots weren't powered by A.I., meaning the
						conversations were limited and it was pretty easy for a
						user to 'break' the experience by talking about
						something left of field.
					</li>
					<li>
						<strong>Formal tone</strong> - The limited few that were
						powered by A.I. were very formal, lacked personality and
						felt forced or 'fake'. It was very obvious it wasn't a
						real person you were speaking to.
					</li>
					<li>
						<strong>Surface level</strong> - A number of apps
						claiming they supported journaling, actually only
						offered basic mood tracking features where the user is
						able to add their mood and then write a brief note about
						it. This doesn't go very deep and is unlikely to offer
						any significant benefits.
					</li>
				</ul>
				<br />
			</div>
			<div className="case-image">
				<Image
					src={im3}
					alt="Summary of our competitor analysis"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="pb-10">
					Summary of the key insights found through competitor
					research
				</figcaption>
			</div>
		</section>
	);
};

export default MapleDiscover;
