import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Skills from '../components/resume/skills';
import Education from '../components/resume/education';
import {
  faTh,
  faLaptop,
  faServer,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const [skills] = useState([
    {
      name: 'Programming languages',
      icon: faCode,
      subCategories: [
        {
          name: 'Programming languages',
          skills: ['JavaScript', 'Java', 'PHP'],
        },
      ],
    },
    {
      name: 'Client Side',
      icon: faLaptop,
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
      icon: faServer,
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
      icon: faTh,
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

  const [education] = useState([
    {
      degree: 'Master of Information Technology and Systems',
      university: 'University of Canberra',
      from: 'Feb 2018',
      to: 'Nov 2019',
      gpa: '6.5/7',
      description: `I studied subjects like Web Design and Programming, Software Technology, Enterprise and Cloud Computing, Project Management, Software Engineering Practice, Technology and Engineering Management, and developed not only technical skills, but also communication, presentation and team work skills through practical assessments.`,
    },
    {
      degree: 'Bachelor of Engineering Computer Science and Engineering',
      university: 'Mepco Schlenk Engineering College',
      from: 'August 2012',
      to: 'April 2016',
      gpa: '7.74/10',
      description: `I learned many of the basics of programming and software development, data structures, algorithms, databases, web technologies, and also developed good organising, administration and leadership skills through being the co-convener of IE CSE Students' Chapter and the placement representative of my class.`,
    },
  ]);

  return (
    <Layout title="Resume">
      <Header
        title="Welcome to my resume!"
        subtitle="Get a brief overview of my skills, education and experience."
        subtitle2="To view samples of my work, visit my portfolio or my Github."
        showLinks
        className="resume-hero"
      />
      <Skills skills={skills} />
      <Education education={education} />
    </Layout>
  );
};

export default Resume;
