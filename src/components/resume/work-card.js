import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WorkCard = ({ role }) => (
  <div className="card work-card">
    <div className="work-card-header">
      <h3 className="work-role">{role.role}</h3>
      <p className="work-organisation">{role.organisation}</p>
      <p className="work-date">
        {role.from} - {role.to}
      </p>
    </div>

    <div className="work-card-body">
      <p className="work-description">{role.description}</p>
      <h3 className="work-subtitle">Skills</h3>
      <div className="work-skills">
        {role.skillMap.map(skill => (
          <p className="work-skill" key={skill}>
            {skill}
          </p>
        ))}
      </div>
    </div>

    {role.showPortfolioLink ? (
      <div className="work-card-footer">
        <Link to="/portfolio" className="btn btn-main">
          Full Portfolio&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    ) : null}
  </div>
);

export default WorkCard;
