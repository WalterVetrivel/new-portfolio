import React, { useState } from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Timeline from '../components/journey/timeline';

const JourneyPage = () => {
  const [headerText] = useState({
    title: `Welcome to my journey!`,
    subtitle: `Follow my journey through time and space in the world of web development.`,
    subtitle2: `Do check out the things I've created on this journey.`,
    showPortfolioLink: true,
    showGithubLink: true,
    className: 'journey-hero',
  });

  const [timeline] = useState([
    {
      year: 2011,
      milestones: [
        {
          month: 'May',
          description: `Learned the basics of programming using C++.`,
        },
      ],
    },
    {
      year: 2012,
      milestones: [
        {
          month: 'April',
          description: 'Graduated year 12 with 95%.',
        },
        {
          month: 'August',
          description: `Commenced bachelor's degree in Computer Science at Mepco Schlenk Engineering College`,
        },
      ],
    },
    {
      year: 2013,
      milestones: [
        {
          month: 'May',
          description:
            'Successfully finished my first year. Had fun strengthening my programming knowledge.',
        },
        {
          month: 'July',
          description: `Became an office-bearer of IE CSE, Students' Chapter at Mepco Schlenk Engineering College.`,
        },
      ],
    },
    {
      year: 2014,
      milestones: [
        {
          month: 'May',
          description:
            'Successfully completed my second year. Learned more about object oriented programming, data structures, databases and operating systems.',
        },
      ],
    },
    {
      year: 2015,
      milestones: [
        {
          month: 'February',
          description: `Took up responsibility as the placement student representative of my class. Also was part of the organising team of Gyan Mitra '15, a national level technical symposium held at Mepco Schlenk Engineering College.`,
        },
        {
          month: 'March',
          description:
            'Successfully compelted Business English Certificate (BEC) Vantage with B grade.',
        },
        {
          month: 'April',
          description: `Participated in SESCON 2k15, a national level software engineering contest with three of my friends and classmates. Our team won a consolation prize.`,
        },
        {
          month: 'May',
          description:
            'Successfully completed my third year. Learned interesting subjects like System Software, Java Programming and Web Technology.',
        },
        {
          month: 'July',
          description: `Became the co-covener of IE CSE Students' Chapter at Mepco Schlenk Engineering College.`,
        },
        {
          month: 'August',
          description:
            'Got an idea for a web development project while waiting in line to buy food at my college canteen.',
        },
        {
          month: 'October',
          description:
            'Completed my first academic web development project. I buit a canteen token issue system with two others to make buying food easier at the college canteen. As it was an academic project and due to college policies, it was not deployed.',
        },
      ],
    },
    {
      year: 2016,
      milestones: [
        {
          month: 'January',
          description:
            'Commenced work on my second academic web devleopment project, a placement portal for my college. The idea of building such a system came to mind as I was facing some challenges in my role as the placement representative. I did this project with a three member team.',
        },
        {
          month: 'February',
          description: `Was part of the organising committee of Gyan Mitra '16, a national level technical symposium held at Mepco Schlenk Engineering College.`,
        },
        {
          month: 'March',
          description:
            'Completed the placement portal.  It was not deployed due to college policies. But I got the highest possible grade for my project course for my two projects.',
        },
        {
          month: 'April',
          description: `Successfully graduated from my bachelor's degree with a GPA of 7.74 out of 10.`,
        },
        {
          month: 'May - June',
          description: 'Was preparing for the GRE and TOEFL exams.',
        },
        {
          month: 'July - August',
          description:
            'Appeared for the GRE and the TOEFL. Scored 324/340 on the GRE and 110/120 on the TOEFL.',
        },
      ],
    },
    {
      year: 2017,
      milestones: [
        {
          month: 'January',
          description: `Began building a "Transformation Group Information System" for Women In Self Help action in Lord's Love (WISHALL), a non-profit organisation, as a freelance web developer.`,
        },
        {
          month: 'May',
          description: `Built basic websites for Prof. Dr. S. Andrews and for his startup "Advanced Science and Technology Research Center".`,
        },
        {
          month: 'June',
          description: `Began building a "Ministry Information System" for Church Growth Association of India (CGAI), the parent organisation of WISHALL.`,
        },
        {
          month: 'August',
          description: `Started applying to universities in Australia for a master's degree`,
        },
        {
          month: 'September',
          description: `Got an offer from University of Canberra for the course Master of Information Technology, a 1.5 year master's program.`,
        },
      ],
    },
    {
      year: 2018,
      milestones: [
        {
          month: 'February',
          description: `Moved to Canberra, Australia to begin my master's degree.`,
        },
        {
          month: 'April',
          description:
            'Revamped the website built for Prof. Dr. S. Andrews. Rebuilt the website using Laravel 5 and Bootstrap 4.',
        },
        {
          month: 'May',
          description: `Successfully completed my first semester with 2 high distinctions, 1 distinction and 1 credit.`,
        },
        {
          month: 'June',
          description:
            'Built a simple website for my dad, Mr. R. Selvakumar, a financial advisor.',
        },
        {
          month: 'November',
          description: `Successfully completed my second semester with 3 high distinctions and 1 distinction.`,
        },
        {
          month: 'December',
          description: `Built a static website using Gatsby for WISHALL. As of now, their requirements have changed and they're getting a new website done by a local agency, but the one I built is still online.`,
        },
      ],
    },
    {
      year: 2019,
      milestones: [
        {
          month: 'February',
          description: `Started building Event Booker, an event organising web app using React, Node.js and GraphQL for the unit "Technology Project PG". Chose this project to work with GraphQL.`,
        },
        {
          month: 'June',
          description: `Finished what would have been my last semester of my degree with 3 high distinctions and 1 distinction, but transferred to Master of Information Technology and Systems, a 2 year master's program in order to learn more.`,
        },
        {
          month: 'August',
          description: `Commenced my fourth semester at University of Canberra, my first (and also my last as I was offered credit for previous study) in my new course.`,
        },
      ],
    },
  ]);

  return (
    <Layout title="Journey">
      <Header
        title={headerText.title}
        subtitle={headerText.subtitle}
        subtitle2={headerText.subtitle2}
        showPortfolioLink={headerText.showPortfolioLink}
        showGithubLink={headerText.showGithubLink}
        className={headerText.className}
      />
      <Timeline timeline={timeline} />
    </Layout>
  );
};

export default JourneyPage;
