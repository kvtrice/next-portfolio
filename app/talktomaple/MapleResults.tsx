import React from "react";
import Image from "next/image";
import im20 from "../../public/assets/projects/talktomaple/20_maple_retentionuplift.jpg";
import im21 from "../../public/assets/projects/talktomaple/21_maple_feedback.jpg";

const MapleResults = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center">
			<div>
				<h2 className="sub-heading">Outcome</h2>
				<h3>Retention rate uplift</h3>
				<br />
				<p>
					Following the new release of Talk to Maple, we saw a greatly
					improved Day 1 & Day 2 retention rate (characterised by
					completing a journaling mission), when compared to our MVP
					release:
				</p>
				<br />
			</div>
			<div>
				<Image
					src={im20}
					alt="Percentage of users that completed a journal mission vs. # of days after first install - MVP vs. V1"
					className="pb-6"
				/>
				<figcaption className="pb-16">
					Percentage of users that completed a journal mission vs. #
					of days after first install - MVP vs. Version 1
				</figcaption>
			</div>
			<div>
				<p>
					This is great <strong>evidence</strong> that the combination
					of an improved journaling experience, UI and gamification
					really helped move the needle on user engagement. <br />
					Note: There is a slight dip in Day 0 retention for V1 versus
					the MVP. This can be attributed to changes made in the
					onboarding flow, in which the User was asked to do a full
					journal. This increased the speed they reached their 'Aha'
					moment, but also made it less likely to go to do an
					additional journal entry that same day.
				</p>
				<br />
			</div>
			<div>
				<h3>User sentiment in the right direction</h3>
				<br />
				<p>
					Our results of our basic user sentiment analysis also showed
					that
					<strong>
						95% of journal sessions resulted in the user feeling
						either the same or better
					</strong>
					, with 38% recording better. This is a great early indicator
					to show that Talk to Maple isn't doing harm and in fact on
					the right path to boosting our users mood. Although to be
					sure there is still further work to do in this space. <br />
					<br />
					With the sentiment analysis being so simplified, it's
					difficult to understand if the high number of users
					reporting 'Same' is due to actually feeling the same, or if
					the other options of 'Better' or 'Worse' are too broad or
					ambiguous that they don't fit what the user is actually
					feeling. Widening this to include a broader range of
					emotions or switching the format up would help us get a
					better gauge on this stat.
					<br />
				</p>
				<br />
			</div>
			<div>
				<h3>Great user feedback</h3>
				<br />
				<p>
					We had also included a short in-app feedback form for users
					to optionally complete, and we received some incredible
					feedback, reinforcing again that we were heading in the
					right direction:
				</p>
			</div>
			<div>
				<Image src={im21} alt="In-app user feedback" className="pb-4" />
				<figcaption className="pb-16">In-app user feedback</figcaption>
			</div>
		</section>
	);
};

export default MapleResults;
