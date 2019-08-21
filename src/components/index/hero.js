import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';

const Hero = props => (
  <header className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Hi! I'm Walter Selvakumar!</h1>
      <h3 className="hero-subtitle">
        I'm a full-stack web developer and programmer.
      </h3>
      <div className="hero-links">
        <Link to="/portfolio" className="hero-link btn-main">
          My Portfolio
        </Link>
        <a
          href="https://github.com/WalterVetrivel"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
