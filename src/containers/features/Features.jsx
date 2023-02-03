import React from 'react';
import './features.css';

import pic from '../../assets/about.png';
import pic2 from '../../assets/lo.png';

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">ABOUT US</h1>
      <p>One of the biggest IEEE Student branches in Delhi, IEEE DTU has emerged as the most active & prolific student organisation in the past 35 years. With over 400 active student members. IEEE DTU provides students extensive opportunities for skill development in various domains of engineering by actively organising seminars, SIGs and workshops by senior members of the organisation and collaborating with other premier institutions.</p>
      <p>Vihaan is an annual event organized by IEEE DTU, a university wide professional organization dedicated to encourage students to take up and continue their careers in STEM Fields. IEEE DU believes in encouraging talent that is not bounded by gender inequalities and with Vihaan, IEEE DTU aims at carrying this thought forward. The event is a 24 hour Hackathon which provides a platform to budding programmers to come up with a solution to an existing problem using technology. Students can participate in a team size of upto 4 members. </p>
    </div>
    <div className="gpt3__features-container">
      <img src={pic} />
      <br />
      <img src={pic2} />
    </div>
  </div>
);

export default Features;
