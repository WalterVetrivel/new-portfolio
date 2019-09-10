import React from 'react';
import EducationImg from '../../images/education.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const EducationCard = props => (
  <div className="card education-card">
    <img src={EducationImg} alt="Education" className="education-img" />
    <div className="education-card-body">
      <h3 className="education-degree mb-h">{props.degree}</h3>
      <p className="education-university mb-h">{props.university}</p>
      <p className="education-date mb-h">
        {props.from} - {props.to}
      </p>
      <p className="education-gpa mb-h">GPA: {props.gpa}</p>
      <p className="education-description">{props.description}</p>
      {props.award ? (
        <p className="education-award">
          <FontAwesomeIcon icon={faAward} />
          <span>{props.award}</span>
        </p>
      ) : null}
    </div>
  </div>
);

export default EducationCard;
