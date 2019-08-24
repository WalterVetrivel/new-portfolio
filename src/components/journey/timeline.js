import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import TimelineCard from './timeline-card';

const Timeline = ({ timeline }) => (
  <section className="section timeline">
    <div className="section-heading-wrapper timeline-heading">
      <h1 className="section-heading">My Journey</h1>
    </div>
    <div className="section-content timeline-content">
      {timeline.map(year => (
        <React.Fragment key={year.year}>
          <h3 className="timeline-year">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {year.year}
          </h3>
          <div className="timeline-milestones">
            {year.milestones.map(milestone => (
              <TimelineCard
                key={`${year.year}${milestone.month}`}
                milestone={milestone}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Timeline;
