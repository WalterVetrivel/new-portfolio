import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Banner from '../components/layout/banner';
import Skills from '../components/resume/skills';
import Education from '../components/resume/education';
import Work from '../components/resume/work';

import {
  faTh,
  faLaptop,
  faServer,
  faCode,
  faHandsHelping,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

const ResumePage = () => {
  const [headerText] = useState({
    title: `Welcome to my resume!`,
    subtitle: `Get a brief overview of my skills, education and experience.`,
    subtitle2: `To view samples of my work, visit my portfolio or my Github.`,
    showPortfolioLink: true,
    showGithubLink: true,
    className: 'resume-hero',
  });

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
        {
          name: 'Languages',
          skills: ['English', 'Tamil'],
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

  const [work] = useState([
    {
      category: 'Technical',
      icon: faCode,
      roles: [
        {
          role: 'Freelance Web Developer',
          organisation: 'Various',
          from: 'Jan 2017',
          to: 'Present',
          description: `As a freelance web developer, I've built websites and web applications for people and organisations. My first two projects were for Women In Self Help Action in Lord's Love and Church Growth Association of India, two sister non-profit organisations for which I developed information systems. I have also developed websites for others. Click below to check out my full portfolio.`,
          skillMap: [
            'Web Development',
            'Communication',
            'Client side',
            'Server side',
            'Databases',
          ],
          showPortfolioLink: true,
        },
      ],
    },
    {
      category: 'Volunteer',
      icon: faHandsHelping,
      roles: [
        {
          role: 'Administration volunteer at Missionheart',
          organisation: 'Missionheart, Canberra',
          from: 'June 2019',
          to: 'Present',
          description: `As an admin volunteer, my role is to maintain the volunteer database at Missionheart and to ensure that all the volunteer documentation is up to date. I work on a team with other volunteers and admin personnel. This role provides me with valuable experience in teamwork and in using Microsoft Office 365 online.`,
          skillMap: [
            'Administration',
            'Communication',
            'Teamwork',
            'Microsoft Office',
          ],
          showPortfolioLink: false,
        },
      ],
    },
    {
      category: 'Student Roles',
      icon: faUserGraduate,
      roles: [
        {
          role: `Co-convener of IE CSE, Students' Chapter`,
          organisation: 'Mepco Schlenk Engineering College',
          from: 'July 2015',
          to: 'March 2016',
          description: `As the co-convener of IE CSE, I had the responsibility of co-ordinating weekly classroom activities including technical talks, presentations, quizzes, group discussions, etc., and reporting on the events to the faculty and relaying information to students. I also had the opportunity to not only co-ordinate, but organise and conduct several talks and presentations myself with other office bearers.`,
          skillMap: ['Teamwork', 'Presentation', 'Organising'],
          showPortfolioLink: false,
        },
        {
          role: `Placement Student Representative`,
          organisation: `Mepco Schlenk Engineering College`,
          from: 'January 2015',
          to: 'March 2016',
          description: `As the placement student representative of my class, I was responsible for maintaining the student placement related database of my class. I also had to work with other placement representatives to communicate information about job opportunities to students. I also built a web application 'Placement Portal' to streamline the process of collecting student information and relaying job opportunities to students, but due to the college policies and lack of time, this project could not be deployed.`,
          skillMap: [
            'Administration',
            'Teamwork',
            'Communication',
            'Web Development',
            'Microsoft Office',
          ],
          showPortfolioLink: false,
        },
      ],
    },
  ]);

  return (
    <Layout title="Resume">
      <Header
        title={headerText.title}
        subtitle={headerText.subtitle}
        subtitle2={headerText.subtitle2}
        showPortfolioLink={headerText.showPortfolioLink}
        showGithubLink={headerText.showGithubLink}
        className={headerText.className}
      />
      <Skills skills={skills} />
      <Education education={education} />
      <Banner className="resume-banner">
        <h1 className="banner-text mb-0">
          I have also done some web development and programming courses on{' '}
          <a
            href="https://www.udemy.com/user/walter-vetrivel-selvakumar/"
            target="_blank"
            className="banner-link"
            rel="noopener noreferrer"
          >
            Udemy
          </a>
          .
        </h1>
      </Banner>
      <Work work={work} />
    </Layout>
  );
};

export default ResumePage;
