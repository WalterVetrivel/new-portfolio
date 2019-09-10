import React, { useState } from 'react';
import { Link } from 'gatsby';
import Attribution from '../attribution';
import FooterText from './footer-contact';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [contact] = useState([
    {
      icon: faEnvelope,
      url: 'mailto:waltervetrivel@yahoo.in',
      text: 'waltervetrivel@yahoo.in',
    },
    {
      icon: faGithub,
      url: 'https://github.com/WalterVetrivel',
      text: 'https://github.com/WalterVetrivel',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/walter-vetrivel-selvakumar/',
      text: 'https://www.linkedin.com/in/walter-vetrivel-selvakumar/',
    },
  ]);
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-contact">
          <h3 className="footer-heading">Contact</h3>
          {contact.map(info => (
            <FooterText
              icon={info.icon}
              url={info.url}
              text={info.text}
              key={info.url}
            />
          ))}
        </div>
        <div className="footer-attribution">
          <h3 className="footer-heading">Attributions</h3>
          <Attribution />
        </div>
      </div>
      <p className="footer-copyright">
        Copyright &copy;&nbsp;
        <Link to="/" className="footer-link">
          Walter Vetrivel Selvakumar
        </Link>
        &nbsp;
        {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
