import React from "react";
import "./FAQs.css";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="main">
      <h1>React Accordion</h1>
      <div className="accordion">
        <Accordion
          title="What is Vihaan?"
          text="Vihaan is a national level hackathon to challenge your creative potential and build innovative solutions to existing problems."
        />
        <Accordion
          title="Hackathon? What’s that?"
          text="In general, it is a 2-3 days long competition which makes you come up with a technical solution to an existing problem under the topics provided. The purpose of a hackathon is for a group of programmers to work together on a collaboration project. In a hackathon, you have to code during the event although you can come up with ideas for how to proceed beforehand."
        />
        <Accordion
          title="Wait so am I required to know coding? I don’t know if I’m skilled enough."
          text="Participation is the essential part, learning is the goal. You might need a basic idea of coding though on the development side."
        />
        <Accordion
          title="Am I required to pay anything?"
          text="No, it’s totally free. We only require your knowledge and enthusiasm. :)"
        />
        <Accordion
          title="I’m interested, How do I register?"
          text="Registration links are active on the website. And the Google forms must have reached you already. There is no requirement of money to register."
        />
        <Accordion
          title="What’s the prize if you end up winning? Give me some incentive."
          text="There is a butt load of a cash prize and swags up for grabs. Further details will be released soon. Although, last year the cash prize were around 1.5 lakhs and swags worth 5 lakhs of rupees."
        />
        <Accordion
          title="Are there any prerequisites for participating? Am I required to have any form of tools?"
          text="You’ll just need your trusty laptop and a sufficient bandwidth internet connection."
        />
        <Accordion
          title="Is it a team competition, can’t I participate alone?"
          text="Yes, Vihaan is a team based hackathon competition and you’ll need to form or be a part of a team to participate. Teaming up will help you socialize and increase your reach."
        />
        <Accordion
          title="So what’s the participation criteria for me and my teammates?"
          text="There is only one, you must be at least above 13 and are a college undergraduate or a high school student."
        />
        <Accordion
          title="That’s great! Any other major thing I need to know?"
          text="Nope, you’re all set. Rev your engines up! owo"
        />
      </div>
    </div>
  );
}

export default App;
