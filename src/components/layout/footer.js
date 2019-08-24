import React from 'react';
import { Link } from 'gatsby';
import Attribution from '../attribution';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-contact">
        <h3 className="footer-heading">Contact</h3>
        <p className="footer-text">
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;
          <a
            href="mailto:waltervetrivel@yahoo.in"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            waltervetrivel@yahoo.in
          </a>
        </p>
        <p className="footer-text">
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          <a
            href="https://github.com/WalterVetrivel"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            https://github.com/WalterVetrivel
          </a>
        </p>
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

export default Footer;
