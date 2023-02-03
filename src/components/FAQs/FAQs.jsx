import React from 'react';
import './FAQs.css';

const FAQ = ({ ques, ans }) => (
  <div className="FAQ__section">
    <div className="question">
      {ques}
    </div>
    <div className="answer">
      {ans}
    </div>
  </div>
);

export default FAQ;
