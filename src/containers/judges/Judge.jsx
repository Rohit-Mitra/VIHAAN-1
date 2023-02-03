import React from 'react';
import './Judge.css';
import Sponsers from '../../components/sponsers/Sponsers';

import pic1 from '../../assets/01.png';

const Judge = () => (

  <div className="section__margin judges_section">
    <div className="k">
      <h1 className="gradient__text2">PREVIOUS JUDGES AND SPEAKERS</h1>
    </div>
    <div className="judges_sectionB">
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
      <Sponsers imgUrl={pic1} Name="Hello Bhai" position="hello bhai" linkedin="https://www.linkedin.com/feed/" pos="hello bhai" />
    </div>
  </div>
);

export default Judge;
