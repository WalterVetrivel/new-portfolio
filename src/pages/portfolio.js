import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Projects from '../components/portfolio/projects';
import {
  faLaptopCode,
  faGraduationCap,
  faFutbol,
} from '@fortawesome/free-solid-svg-icons';

import Andrews from '../images/projects/andrews.png';
import Wishall from '../images/projects/wishall.png';
import Selvakumar from '../images/projects/selvakumar.png';
import Company from '../images/projects/company.png';
import Recipes from '../images/projects/recipes.png';
import EventOrganiser from '../images/projects/event-organiser.png';
import Resume from '../images/projects/resume.png';

const Portfolio = () => {
  const [headerText] = useState({
    title: `Welcome to my portfolio!`,
    subtitle: `Scroll to check out my main projects.`,
    subtitle2: `Also, please check out my Github using the link below.`,
    showPortfolioLink: false,
    showGithubLink: true,
    className: 'portfolio-hero',
  });

  const [projects] = useState([
    {
      category: 'Main Projects',
      icon: faLaptopCode,
      projects: [
        {
          title: 'Portfolio Website',
          client: 'Prof. Dr. S. Andrews',
          technology: ['Bootstrap 4', 'Laravel', 'MySQL'],
          description: `A multi-page, dynamic portfolio website for Prof. Dr. S. Andrews built using a tech-stack of Bootstrap 4, Laravel 5, and MySQL. Site uses Font Awesome 4 icons. Site fully leverages the Laravel Eloquent ORM and Blade templating engine.`,
          repo: 'https://github.com/WalterVetrivel/andrews_laravel',
          demoUrl: 'http://andrewssamraj.in/',
          image: Andrews,
        },
        {
          title: 'Financial Advisor Landing Page',
          client: 'Mr. R. Selvakumar',
          technology: ['Bootstrap 4', 'Laravel', 'MySQL'],
          description: `A dynamic single-page website for Mr. R. Selvakumar, a financial advisor based in India. Site uses Bootstrap 4, Laravel 5 and MySQL, and makes use of Laravel's Eloquent ORM and the Blade templating engine.`,
          repo: '',
          demoUrl: '',
          image: Selvakumar,
        },
        {
          title: 'Organisation Website',
          client: `Women in Self Help Action in Lord's Love (WISHALL)`,
          technology: ['Gatsby', 'React'],
          description: `A static, single-page website for WISHALL, a non-profit organisation in India. Site is built using Gatsby, a static site generator for React and is hosted on Netlify. The code and live demo do not contain the production build.`,
          repo: '',
          demoUrl: '',
          image: Wishall,
        },
      ],
    },
    {
      category: 'Academic Projects',
      icon: faGraduationCap,
      projects: [
        {
          title: 'Event Organiser',
          university: 'University of Canberra',
          technology: [
            'React',
            'Node.js',
            'GraphQL',
            'Ant Design',
            'Prisma',
            'Postgres',
          ],
          description: `An event organiser web app built using React with Ant Design UI components on the front-end and Node.js, Prisma and Postgres database on the back-end. Authentication is done using JWT and Stripe is used for processing payments. Project was buit for the unit "Technology Project PG" at University of Canberra.`,
          repo: '',
          demoUrl: '',
          image: EventOrganiser,
        },
        {
          title: 'Company Website Template',
          university: 'University of Canberra',
          technology: ['Bootstrap 4', 'Laravel', 'MySQL'],
          description: `A multi-page, dynamic, responsive company website template built using Bootstrap 4, Laravel 5 and MySQL. Project was bulit for the unit "Software Engineering Practice G" at University of Canberra.`,
          repo: '',
          demoUrl: '',
          image: Company,
        },
      ],
    },
    {
      category: 'Side Projects',
      icon: faFutbol,
      projects: [
        {
          title: 'Recipe Search App',
          technology: ['React'],
          description: `A simple react app to search for different recipes. Recipe data is fetched from an external API, "The Meal DB".`,
          repo: '',
          demoUrl: '',
          image: Recipes,
        },
        {
          title: 'Bootstrap Resume Template',
          technology: ['Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
          description: `A simple single-page responsive Resume template built using HTML5, CSS3, JavaScript and Bootstrap 4.`,
          repo: '',
          demoUrl: '',
          image: Resume,
        },
      ],
    },
  ]);

  return (
    <Layout title="Portfolio">
      <Header
        title={headerText.title}
        subtitle={headerText.subtitle}
        subtitle2={headerText.subtitle2}
        showPortfolioLink={headerText.showPortfolioLink}
        showGithubLink={headerText.showGithubLink}
        className={headerText.className}
      />
      <Projects projects={projects} />
    </Layout>
  );
};

export default Portfolio;
