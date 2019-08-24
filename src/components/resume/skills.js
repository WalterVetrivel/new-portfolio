import React from 'react';
import SkillsTable from './skills-table';

const Skills = props => {
  return (
    <section className="section skills">
      <div className="section-heading-wrapper skills-heading">
        <h1 className="section-heading">My Skills</h1>
      </div>
      <div className="section-content skills-content">
        <SkillsTable skillCategories={props.skills} />
      </div>
    </section>
  );
};

export default Skills;
