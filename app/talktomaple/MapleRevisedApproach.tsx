import React from "react";
import Image from "next/image";
import im5 from "../../public/assets/projects/talktomaple/5_maple_wireframes2.jpg";
import im6 from "../../public/assets/projects/talktomaple/6_maple_prompts.jpg";

const MapleRevisedApproach = () => {
	return (
		<section className="pb-12 flex flex-col justify-center items-center">
			<div>
				<h3>Setbacks, reflection and revising our approach</h3>
				<br />
				<p>
					When we delved into building the WhatsApp conversational
					style feature, we hit a <strong>roadblock</strong>. We
					realised Flutterflow's messaging didn't support calling
					third-party APIs (e.g. OpenAI) and displaying the response.
					In order to do that we were going to need to write some
					custom code, which was outside of our capabilities.
					<br />
					<br />
					Initially this felt like a major setback; the whole premise
					of our app seemed to go down the drain without the
					conversational style journaling. Soon afterwards I was using
					Duolingo and had a<strong>lightbulb moment</strong>. They
					had this brilliant way of structuring lessons: one question
					per page, and you had to hit "submit" to move on. It kept
					you laser-focused on the task at hand and made everything
					feel doable, without overwhelming you with a wall of text.
					<br />
					<br />
					That got me thinking; what if we applied a similar approach
					to journaling? A step-by-step process, one page at a time.
					From a technical standpoint, we could handle the API
					response upon submission, and that solved our earlier woes.
					Plus, I had a hunch that it would actually provide a
					<strong>better experience</strong> for our users. More
					focus, bite-sized "missions," and less effort to complete a
					journal entry (which we discovered as a pain point in our
					user research).
					<br />
					<br />I put together some wireframes to outline this revised
					direction:
				</p>
			</div>
			<div>
				<Image
					src={im5}
					alt="Wireframes of the revised bite-sized 1 page at a time journaling approach"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="mb-10">
					Wireframes of the revised bite-sized 1 page at a time
					journaling approach
				</figcaption>
			</div>
			<div>
				<h3>Integrating the A.I</h3>
				<br />
				<p>
					While integrating ChatGPT into our application, we
					considered the prompts and AI responses. Initially, we
					identified potential journal prompt areas based on our
					research. To validate and refine these prompts, we sought
					feedback from mental health professionals. After careful
					consideration, we settled on an initial set of prompts:
				</p>
			</div>
			<div>
				<Image
					src={im6}
					alt="Summary of journal prompts based on feedbak from mental health professionals"
					className="mb-4 rounded-lg"
				/>
				<figcaption className="mb-10">
					Summary of journal prompts based on feedbak from mental
					health professionals
				</figcaption>
			</div>
			<div>
				<p>
					To gauge user engagement with the AI, we also
					<strong>conducted an experiment</strong> involving mental
					health professionals and users. The AI was hosted in a web
					browser, and we provided pre-set prompts from the
					perspective of our chosen digital companion; a puppy named
					Maple.
					<br />
					<br />
					From the experiment, we observed that users tended to
					<strong>disengage</strong> after approximately 4-5
					exchanges. The key contributor being the AI's repetitive
					nature and excessive focus on asking "Why" repeatedly. This
					reinforced the decision to pursue a staged journaling
					approach instead of the WhatsApp conversational style. It
					also provided insights for improving our prompt engineering.
					<br />
					<br />
					Additionally, mental health professionals emphasised the
					importance of incorporating a{" "}
					<strong>red flag check</strong>. They stressed that if a
					user expresses self-harm or engages in extremely sensitive
					or harmful discussion, the AI needs to be able to recognise
					its limitations and provide appropriate resources.
					<br />
				</p>
				<br />
			</div>
			<div>
				<h3>Introducing a 'red flag' check</h3>
				<br />
				<p>
					Ensuring ethical practices and prioritising the well-being
					of our users were key considerations throughout this
					process. To address this, we implemented a "red flag" system
					that allowed the AI to respond appropriately when users
					discussed serious issues like
					<strong>suicide and self-harm</strong>. In such cases we
					wanted to stop the conversation from going further and serve
					the user with some helpful resources for seeking help.
					<br />
					<br />
					Initially, we attempted to create our own capture system
					based on keywords, but we discovered that some instances
					slipped through undetected. Fortunately, OpenAI soon
					introduced their own auto-moderation feature, which captured
					most instances of concern. However, through QA testing we
					found there were still a few cases that went unnoticed.
					<br />
					<br />
					As a result, we decided on a{" "}
					<strong>combination approach</strong>. We utilised OpenAI's
					auto-moderation system alongside our dedicated keyword
					capture. This proved more effective and allowed us to
					continually build on the keyword list to address any
					potentially missed cases in the future. By combining these
					approaches, we were able to better ensure{" "}
					<strong>user safety</strong> while maintaining control over
					the moderation process.
				</p>
			</div>
		</section>
	);
};

export default MapleRevisedApproach;
