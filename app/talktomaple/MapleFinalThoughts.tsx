import React from 'react';
import Image from 'next/image';
import im22 from '../../public/assets/projects/talktomaple/22_maple_teampicture.jpeg';

const MapleFinalThoughts = () => {
  return (
    <section className='pb-12 flex flex-col justify-center items-center max-w-[750px] mx-auto'>
      <div>
        <h3>What's next?</h3>
        <br />
        <p>
          Whilst there have been positive early signals for Talk to Maple,
          there's definitely still a long way to go. Engagement and retention
          will continue to be the key focus metrics, which could be impacted
          through things such as:
        </p>
        <br />
        <ul>
          <li>
            <strong>Push Notifications</strong> - to remind users to complete
            their daily missions or journal entries to further optimise
            retention from Day 3 onwards.
          </li>
          <br />
          <li>
            <strong>More Content</strong> - through introducing things like more
            journal prompts, better rewards, further customisation and more
            interactions with the companion. Further gamification through things
            like leaderboards and friendly competition to drive extrinsic
            motivation are also things we'd be looking to explore in the future.
          </li>
          <br />
          <li>
            <strong>Social Accountability</strong> - is a huge driver of habit
            formation; a great example is having a gym buddy. I hypothesise that
            introducing things like the ability to invite friends, send rewards
            to friends for completing a mission and supporting friends to stay
            accountable through in-app actions would help drive retention and
            engagement.
          </li>
          <br />
          <li>
            <strong>Further user sentiment analysis</strong> - in particular,
            against each journal prompt and see if there's a correlation between
            how people feel after journaling and which prompt they've chosen.
            This can help inform what kinds of prompts might be good additions
            (or even which should be removed)
          </li>
        </ul>
        <br />
      </div>
      <div>
        <h3>Reflections</h3>
        <br />
        <p>
          As a team we had to opt out of the remainder of the program for
          personal reasons, however we will continue to work on Talk to Maple
          over time as a passion project.
          <br />
          <br />
          The Antler program was incredibly intense and high pressure, and there
          were so many learnings that came out of it, but one of the big ones
          would have to be how invaluable having the <strong>
            right data
          </strong>{' '}
          is. As a team we were data geeks (with one co-founder even being a
          data scientist by trade), so we took the time to track as many key
          metrics as we could from the get go.
          <br />
          <br />
          This definitely took a bit more time and effort, but turned out to be
          one of the best decisions we made. This helped not only build our
          credibility with the investment team but above all helped us make the{' '}
          <strong>best decisions possible</strong> for our app and our users.
          <br />
          <br />
          With such intense timelines we also had to prioritise our time; each
          day we focussed on the number one highest impact item we could be
          doing that takes us <strong>towards our goal</strong> of retained and
          engaged users. Having this clear north star helped us{' '}
          <strong>make trade-offs ruthlessly</strong> and move the needle as far
          as possible in the time we had. It did mean that other (also
          important) things got deprioritised in this early stage, such as
          marketing, acquisition etc.
          <br />
        </p>
        <br />
      </div>
      <div>
        <div>
          <Image
            src={im22}
            alt="2/3's of the Talk to Maple team; my partner and I. Plus our dog Maple, the inspiration for our mascot."
            className='mb-10 rounded-xl'
          />
        </div>
        <figcaption className='pb-16'>
          2/3's of the Talk to Maple team; my partner and I. Plus our dog Maple,
          the inspiration for our mascot.
        </figcaption>
      </div>
    </section>
  );
};

export default MapleFinalThoughts;
