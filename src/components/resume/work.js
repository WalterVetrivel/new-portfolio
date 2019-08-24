import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkCard from './work-card';

const Work = props => (
  <section className="section work">
    <div className="section-heading-wrapper work-heading">
      <h1 className="section-heading">My Work</h1>
    </div>
    <div className="section-content work-content">
      {props.work.map((work, index) => (
        <React.Fragment key={work.category}>
          <h3 className="work-category">
            <FontAwesomeIcon icon={work.icon} />
            {work.category}
          </h3>
          {work.roles.map(role => (
            <WorkCard key={role.role} role={role} />
          ))}
          {index < props.work.length - 1 ? <hr /> : null}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Work;
