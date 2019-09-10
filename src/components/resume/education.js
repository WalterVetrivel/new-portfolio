import React from 'react';
import EducationCard from './education-card';

const Education = ({ education }) => (
  <section className="section education">
    <div className="section-heading-wrapper education-heading">
      <h1 className="section-heading section-heading-light">My Studies</h1>
    </div>
    <div className="section-content education-content">
      {education.map(ed => (
        <EducationCard
          key={ed.degree}
          degree={ed.degree}
          university={ed.university}
          from={ed.from}
          to={ed.to}
          gpa={ed.gpa}
          description={ed.description}
          award={ed.award}
        />
      ))}
    </div>
  </section>
);

export default Education;
