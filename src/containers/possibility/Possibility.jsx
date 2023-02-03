import React from 'react';
import possibilityImage from '../../assets/faq-questions-often-help.jpeg';
import './possibility.css';
import FAQs from '../../components/FAQs/FAQs';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <FAQs ques="What is Vihaan?" ans="Vihaan is a national level hackathon to challenge your creative potential and build innovative solutions to existing problems." color="#ff0000" />
      <FAQs ques="Hackathon? What's that?" ans="In general, it is a 2-3 days long competition which makes you come up with a technical solution to an existing problem under the topics provided. The purpose of a hackathon is for a group of programmers to work together on a collaboration project. In a hackathon, you have to code during the event although you can come up with ideas for how to proceed beforehand." />
      <FAQs ques="So what's the participation criteria for me and my teammates?" ans="There is only one, you must be at least above 13 and are a college undergraduate or a high school student." />
      <FAQs ques="Wait so am I required to know coding? I don't know if I'm skilled enough." ans="Participation is the essential part, learning is the goal. You might need a basic idea of coding though on the development side." />
      <FAQs ques="Am I required to pay anything?" ans="No, it's totally free. We only require your knowledge and enthusiasm." />
      <FAQs ques="I'm interested, How do I register?" ans="Registration links are active on the website. And the Google forms must have reached you already. There is no requirement of money to register." />
      <FAQs ques="What's the prize if you end up winning? Give me some incentive." ans="There is a butt load of a cash prize and swags up for grabs. Further details will be released soon. Although, last year the cash prize were around 1.5 lakhs and swags worth 5 lakhs of rupees." />
      <FAQs ques="Is it a team competition, can't I participate alone?" ans="Yes, Vihaan is a team based hackathon competition and you'll need to form or be a part of a team to participate. Teaming up will help you socialize and increase your reach." />
      <FAQs ques="So what's the participation criteria for me and my teammates?" ans="There is only one, you must be at least above 13 and are a college undergraduate or a high school student." />
      <FAQs ques="That's great! Any other major thing I need to know?" ans="Nope, you're all set. Rev your engines up!" />
    </div>
  </div>
);

export default Possibility;
