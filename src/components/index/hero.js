import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';

const Hero = props => (
  <header className="index-hero">
    <div className="index-hero-content">
      <h1 className="index-hero-title">Hi! I'm Walter Selvakumar!</h1>
      <h3 className="index-hero-subtitle">
        I'm a full-stack web developer and programmer.
      </h3>
      <div className="index-hero-links">
        <Link to="/portfolio" className="index-hero-link btn-main">
          My Portfolio
        </Link>
        <a
          href="https://github.com/WalterVetrivel"
          target="_blank"
          rel="noopener noreferrer"
          className="index-hero-github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
