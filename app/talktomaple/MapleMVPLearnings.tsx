import React from "react";
import Image from "next/image";
import im10 from "../../public/assets/projects/talktomaple/10_maple_newjournaling.jpg";
import im11 from "../../public/assets/projects/talktomaple/11_maple_usersentiment.png";

const MapleMVPLearnings = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center max-w-[750px] mx-auto">
			<div>
				<h2 className="sub-heading">Iterate</h2>
				<h3>Valuable learnings from the MVP</h3>
				<br />
				<p>
					The MVP provided some valuable feedback on ways to improve
					the experience to help improve engagement and retention:
				</p>
				<br />
				<ul>
					<li>
						<strong>Continued conversations</strong>
						<br />
						Based on user data, we discovered that users wanted to
						continue their conversations with the AI by starting a
						new prompt but continuing from a previous completed
						entry. We also observed that users were typing out
						longer entries, indicating a desire for deeper
						engagement. These insights led us to the idea of
						introducing a 3-part journaling format instead of a
						single page. This approach allows users to have a more
						fulfilling conversation with the AI while still
						maintaining a staged approach. We considered the
						findings from our earlier experiment, which indicated
						that users tended to disengage after 4-5
						back-and-forths. By limiting the engagement to 3 parts,
						we aim to keep journaling exciting and engaging each
						time.
					</li>
					<br />
					<li>
						<strong>Improve accessibility</strong>
						<br />
						Supervised user acceptance testing highlighted
						difficulties in distinguishing buttons, text fields, and
						other elements within the app. To address this, I
						implemented stronger borders and adjusted colours to
						enhance accessibility.
					</li>
					<br />
					<li>
						<strong>Tweak journal prompts</strong>
						<br />
						Some users indicated that the single-word journal
						prompts were vague. To address this, we revised the
						prompts to use "I" statements that clearly convey what
						the user can expect from each prompt (e.g., "I want to
						reflect on something" instead of simply "Reflect").
					</li>
					<br />
					<li>
						<strong>Increase visibility of system status</strong>
						<br />
						We saw that users were unintentionally pressing the
						Submit button multiple times, leading to duplicated API
						calls and responses. We added notification text upon
						pressing the button, informing users of the slight
						delay, and disabled the button after the first press to
						prevent multiple submissions.
					</li>
					<br />
					<li>
						<strong>Submit button location</strong>
						<br />
						Users were typing longer messages than anticipated,
						causing the text field to expand and push the UI at the
						top of the screen out of sight. To address this, I moved
						the submission button to the bottom of the text entry
						box, ensuring it remains visible to users immediately
						after they finish typing, eliminating the need for
						scrolling back up.
					</li>
					<br />
				</ul>
				<p>
					Fleshing these things out further resulted in the following
					wireframes:
				</p>
				<br />
				<br />
			</div>
			<div className="flex flex-col justify-center items-center case-image mb-16">
				<Image
					src={im10}
					alt="Wireframes of the 3 part journaling and other changes based on feedback from the MVP"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="mb-10">
					Wireframes of the 3 part journaling and other changes based
					on feedback from the MVP
				</figcaption>
			</div>
			<div>
				<h3>The battle of the LLM's</h3>
				<br />
				<p>
					During the process, a new release of ChatGPT occurred, which
					prompted us to assess whether we should switch our LLM or
					stick with the existing one, considering our focus on user
					experience.
					<br />
					<br />
					We initially utilised ChatGPT 3 DaVinci, as it was the
					latest version that allowed for fine-tuning and
					incorporating our own datasets. However, ChatGPT 3.5 Turbo
					became available, promising better conversational prowess
					(without fine-tuning).
					<br />
					<br />
					After conducting internal testing, we discovered that
					ChatGPT 3.5 Turbo generated more <strong>
						engaging
					</strong>{" "}
					and on-brand responses, exhibiting a conversational and
					personable tone. However, Turbo didn't strictly adhere to
					instructions during the final journaling stage, continuing
					the conversation indefinitely. On the other hand, DaVinci
					performed better in this aspect but was less effective in
					the earlier journaling stages, where we sought a more
					conversational approach with the ability to respond to
					multiple threads within a single response.
					<br />
					<br />
					To <strong>strike a balance</strong> between conversational
					engagement and summarisation, we decided to implement a
					hybrid approach. We used ChatGPT 3.5 Turbo for the first two
					parts of the journaling process and ChatGPT 3 DaVinci for
					the final part, which required a concise and summarised
					conversation.
				</p>
				<br />
			</div>
			<div>
				<h3>Understanding user sentiment</h3>
				<br />
				<p>
					To gather feedback on user sentiment and evaluate the
					<strong>effectiveness</strong> of our journal prompts, we
					implemented a simple 3-point feedback scale. This allowed us
					to keep the feedback process easy to understand for the
					user, and remain fun, light-hearted and not feel like a
					chore following their journaling.
					<br />
					<br />
					We made the decision to have the feedback options be
					represented as
					<strong>emoji's</strong> - the Talk to Maple brand is fun
					and I wanted giving feedback to feel fun too. We also opted
					for a forced action, with the emoji selections becoming the
					only way to proceed to the rewards screen following their
					journal mission.
					<br />
					<br />
					Through researching other feedback mechanisms, I saw that
					this was a common design pattern, but given the change in UI
					to a key screen, we were prepared to revert the change if we
					saw any significant drop in journal completions following
					the launch of the next release.
					<br />
					<br />
				</p>
				<br />
			</div>
			<div className="case-image">
				<Image
					src={im11}
					alt="Wireframes of the Emoji feedback capture screens"
					className="mb-4 w-auto p-10"
				/>
				<figcaption className="mb-10">
					Wireframes of the Emoji feedback capture screens
				</figcaption>
			</div>
		</section>
	);
};

export default MapleMVPLearnings;
