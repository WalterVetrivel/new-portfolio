import React from 'react';

const TimelineCard = ({ milestone }) => (
  <div className="timeline-card-wrapper">
    <div className="timeline-card card mb-1 p-2">
      <h3 className="timeline-card-title">{milestone.month}</h3>
      <p className="timeline-card-description">{milestone.description}</p>
    </div>
  </div>
);

export default TimelineCard;
