import React from 'react';
import Article from '../../components/article/Article';
import { blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">TRACKS</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} text="FINTECH" />
        <Article imgUrl={blog03} text="AR/VR" />
        <Article imgUrl={blog04} text="EDUCATION" />
        <Article imgUrl={blog05} text="HEALTHCARE" />
        <Article imgUrl={blog02} text="BLOCKCHAIN" />
        <Article imgUrl={blog03} text="CYBERSECURITY" />
        <Article imgUrl={blog04} text="HAPTICS TECHNOLOGY" />
        <Article imgUrl={blog05} text="OPEN INNOVATION" />
      </div>
    </div>
  </div>
);

export default Blog;
