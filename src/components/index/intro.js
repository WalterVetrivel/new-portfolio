import React from 'react';
import Avatar from '../../images/walter.jpeg';

const Intro = props => (
  <section className="intro">
    <div className="intro-heading">
      <h1 className="section-heading">Who am I?</h1>
    </div>
    <div className="intro-content">
      <img src={Avatar} alt="Walter Selvakumar" className="intro-avatar" />
      <div
        className="intro-text"
        dangerouslySetInnerHTML={{ __html: props.introText }}
      ></div>
    </div>
  </section>
);

export default Intro;
