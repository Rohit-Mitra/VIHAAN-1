import React from 'react';
import ai from '../../assets/Screenshot_2023-02-02_at_9.25.49_PM-removebg.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
    <br />
    <div className="gpt3__header-content">
      {/* <h1 className="gradient__text">VIHAAN</h1> */}
      <h4 className="gradient__text">Organised By the <b>IEEE DTU</b>, the most active and innovative student branches in India</h4>
    </div>
  </div>
);

export default Header;
