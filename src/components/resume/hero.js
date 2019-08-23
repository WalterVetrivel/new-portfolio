import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';

const Hero = props => (
  <header className="hero resume-hero">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to my resume!</h1>
      <h3 className="hero-subtitle">
        Get a brief overview of my skills, education and experience.
      </h3>
      <p className="hero-subtitle-2">
        To view samples of my work, visit my portfolio or my Github.
      </p>
      <div className="hero-links">
        <Link to="/portfolio" className="hero-link btn-main">
          My Portfolio
        </Link>
        <a
          href="https://github.com/WalterVetrivel"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-github btn-dark"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
