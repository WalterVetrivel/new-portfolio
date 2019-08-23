import React from 'react';
import SkillsTable from './skills-table';

const Skills = props => {
  return (
    <section className="skills">
      <div className="skills-heading">
        <h1 className="section-heading">My Skills</h1>
      </div>
      <div className="skills-content">
        <SkillsTable skillCategories={props.skills} />
      </div>
    </section>
  );
};

export default Skills;
