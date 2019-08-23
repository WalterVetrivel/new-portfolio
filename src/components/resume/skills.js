import React, { useState } from 'react';
import SkillsTable from './skills-table';

const Skills = props => {
  const [skills] = useState([
    {
      name: 'Programming languages',
      subCategories: [
        {
          name: 'Programming languages',
          skills: ['JavaScript', 'Java', 'PHP'],
        },
      ],
    },
    {
      name: 'Client Side',
      subCategories: [
        {
          name: 'Technologies',
          skills: ['HTML5', 'CSS3', 'JavaScript'],
        },
        {
          name: 'Libraries & Frameworks',
          skills: ['React', 'Bootstrap 4'],
        },
      ],
    },
    {
      name: 'Server Side',
      subCategories: [
        {
          name: 'Technologies',
          skills: ['Node.js', 'PHP', 'REST API', 'GraphQL'],
        },
        {
          name: 'Libraries & Frameworks',
          skills: ['Express', 'Laravel'],
        },
        {
          name: 'Databases',
          skills: ['MySQL', 'MongoDB', 'Postgres'],
        },
      ],
    },
    {
      name: 'Other',
      subCategories: [
        {
          name: 'Miscellaneous',
          skills: [
            'Gatsby',
            'GraphCMS',
            'Visual Studio Code',
            'Prisma',
            'SASS',
          ],
        },
        {
          name: 'Microsoft Office',
          skills: ['MS Word', 'MS Excel', 'MS Powerpoint'],
        },
        {
          name: 'Non-technical',
          skills: [
            'Communication',
            'Presentation',
            'Team work',
            'Organising & administration',
            'Report writing',
          ],
        },
      ],
    },
  ]);

  return (
    <section className="skills">
      <div className="skills-heading">
        <h1 className="section-heading">My Skills</h1>
      </div>
      <div className="skills-content">
        {/* <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
        <h3>Client Side</h3>
        <h3>Technologies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
        <h3>Frameworks &amp; Libraries</h3>
        <ul>
          <li>React</li>
          <li>Bootstrap 4</li>
        </ul>
        <h3>Server Side</h3>
        <h3>Technologies</h3>
        <ul>
          <li>Node.js</li>
          <li>PHP</li>
          <li>REST API</li>
          <li>GraphQL</li>
        </ul>
        <h3>Frameworks &amp; libraries</h3>
        <ul>
          <li>Express</li>
          <li>Laravel</li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <h3>Other</h3>
        <h3>Miscellaneous tools, frameworks &amp; libraries</h3>
        <ul>
          <li>Gatsby</li>
          <li>SASS</li>
          <li>Prisma</li>
          <li>Visual Studio Code</li>
        </ul>
        <h3>Non-technical</h3>
        <ul>
          <li>Communication</li>
          <li>Presentation</li>
          <li>Organising and Administration</li>
		</ul> */}
        <SkillsTable skillCategories={skills} />
      </div>
    </section>
  );
};

export default Skills;
