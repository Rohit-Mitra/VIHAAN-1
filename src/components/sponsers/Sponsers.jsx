import React from 'react';
import './sponser.css';
import { BsTwitter } from 'react-icons/bs';

const Sponsers = ({ imgUrl, Name, position, linkedin, pos }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <h4>{Name}</h4>
      <h4>{position}</h4>
      <a href={linkedin}>|<BsTwitter />|</a>
      <h4>{pos}</h4>
    </div>
  </div>
);

export default Sponsers;
