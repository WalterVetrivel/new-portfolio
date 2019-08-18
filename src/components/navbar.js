import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <FontAwesomeIcon icon={faHome} />
        Walter
      </Link>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/journey" className="nav-link">
            Journey
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/WalterVetrivel"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <button
        className="nav-toggle"
        onClick={() => {
          const navItems = document.querySelector('.nav-items');
          if (!showNav) {
            navItems.classList.add('show');
            setShowNav(true);
          } else {
            navItems.classList.remove('show');
            setShowNav(false);
          }
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
