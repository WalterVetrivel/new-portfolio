import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [links] = useState([
    { url: '/', text: 'Home' },
    { url: '/resume', text: 'Resume' },
    { url: '/portfolio', text: 'Portfolio' },
    { url: '/journey', text: 'Journey' },
  ]);
  const [external] = useState([
    {
      url: 'https://github.com/WalterVetrivel',
      icon: faGithub,
    },
    {
      url: 'https://www.linkedin.com/in/walter-vetrivel-selvakumar/',
      icon: faLinkedin,
    },
  ]);

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <FontAwesomeIcon icon={faHome} />
        Walter
      </Link>
      <ul className="nav-items">
        {links.map(link => (
          <li className="nav-item" key={link.url}>
            <Link to={link.url} className="nav-link" activeClassName="active">
              {link.text}
            </Link>
          </li>
        ))}
        {external.map(link => (
          <li className="nav-item" key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
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
