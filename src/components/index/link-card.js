import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LinkCard = props => (
  <div className="link-card-wrapper">
    <div className="link-card card">
      <img
        src={props.linkImg}
        alt={props.linkTitle}
        className="link-card-img"
      />
      <div className="link-card-content">
        <h3 className="link-card-title card-title">{props.linkTitle}</h3>
        <p className="link-card-text">{props.linkText}</p>
        <Link to={`/${props.linkUrl}`} className="btn btn-main link-card-link">
          View {props.linkUrl}&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  </div>
);

export default LinkCard;
