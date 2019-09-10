import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterText = ({ icon, url, text }) => (
  <p className="footer-text">
    <FontAwesomeIcon icon={icon} />
    &nbsp;
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="footer-link"
    >
      {text}
    </a>
  </p>
);

export default FooterText;
