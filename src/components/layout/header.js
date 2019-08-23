import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'gatsby';

const Hero = props => {
  return (
    <header className={`hero ${props.className}`}>
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <h3 className="hero-subtitle">{props.subtitle}</h3>
        {props.subtitle2 ? (
          <p className="hero-subtitle-2">{props.subtitle2}</p>
        ) : null}
        {props.showLinks ? (
          <div className="hero-links">
            <Link to="/portfolio" className="hero-link btn btn-main">
              <FontAwesomeIcon icon={faFolderOpen} />
              <span>My Portfolio</span>
            </Link>
            <a
              href="https://github.com/WalterVetrivel"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link btn btn-dark"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Hero;
