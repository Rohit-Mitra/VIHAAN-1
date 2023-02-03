import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">About Us</a></p>
          <p><a href="#wgpt3">Tracks</a></p>
          <p><a href="#possibility">Prizes</a></p>
          <p><a href="#features">Timeline</a></p>
          <p><a href="#blog">Judges</a></p>
          <p><a href="#home">Sponsers</a></p>
          <p><a href="#wgpt3">FAQs</a></p>
          <p><a href="#possibility">Team</a></p>
          <p><a href="#features">Contact us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">About Us</a></p>
            <p><a href="#wgpt3">Tracks</a></p>
            <p><a href="#possibility">Prizes</a></p>
            <p><a href="#features">Timeline</a></p>
            <p><a href="#blog">Judges</a></p>
            <p><a href="#home">Sponsers</a></p>
            <p><a href="#wgpt3">FAQs</a></p>
            <p><a href="#possibility">Team</a></p>
            <p><a href="#features">Contact us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
