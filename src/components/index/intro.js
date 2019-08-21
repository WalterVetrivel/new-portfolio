import React from 'react';
import Avatar from '../../images/walter.jpeg';

const Intro = () => (
  <section className="intro">
    <div className="intro-heading">
      <h1 className="section-heading">Who am I?</h1>
    </div>
    <div className="intro-content">
      <img src={Avatar} alt="Walter Selvakumar" className="intro-avatar" />
      <div className="intro-text">
        <p className="paragraph">
          Hi there! I'm Walter, a full-stack web developer with a passion for
          programming. I like learning new technologies and am not shy to delve
          into new tools and frameworks. I mainly work with JavaScript on, but I
          can also code in Java and PHP, and I can quickly learn the syntax of a
          new language.
        </p>
        <p className="paragraph">
          When I'm not furiously typing into Visual Studio Code, I like hanging
          out with friends, playing chess and table tennis.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
