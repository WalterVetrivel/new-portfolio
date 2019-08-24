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
    subtitle: `Here, I showcase some of my major professional, academic and side projects.`,
    subtitle2: `For more of my projects, please check out my Github.`,
    showPortfolioLink: false,
    showGithubLink: true,
    className: 'portfolio-hero',
  });

  const [projects] = useState([
    {
      category: 'Professional Projects',
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
          repo: 'https://github.com/WalterVetrivel/financial_advisor',
          demoUrl: 'http://www.financialadvisorselvakumar.in',
          image: Selvakumar,
        },
        {
          title: 'Organisation Website',
          client: `Women in Self Help Action in Lord's Love (WISHALL)`,
          technology: ['Gatsby', 'React', 'GraphCMS'],
          description: `A static, single-page website for WISHALL, a non-profit organisation in India. Site is built using Gatsby, a static site generator for React and is hosted on Netlify. The code and live demo do not contain the production build.`,
          repo: 'https://github.com/WalterVetrivel/wishall_website',
          demoUrl: 'https://lucid-kirch-bbaf20.netlify.com/',
          image: Wishall,
        },
      ],
    },
    {
      category: 'Academic Projects',
      icon: faGraduationCap,
      projects: [
        {
          title: 'Event Booker',
          university: 'University of Canberra',
          technology: [
            'React',
            'Node.js',
            'GraphQL',
            'Ant Design',
            'Prisma',
            'Postgres',
            'JWT',
            'Stripe',
          ],
          description: `An event organisation web app built using React with Ant Design UI components on the front-end and Node.js, Prisma and Postgres database on the back-end. Authentication is done using JWT and Stripe is used for processing payments. Project was buit for the unit "Technology Project PG" at University of Canberra.`,
          repo: 'https://github.com/WalterVetrivel/technology_project_backend',
          demoUrl: null,
          image: EventOrganiser,
        },
        {
          title: 'Company Website Template',
          university: 'University of Canberra',
          technology: ['Bootstrap 4', 'Laravel', 'MySQL', 'SASS'],
          description: `A multi-page, dynamic, responsive company website template built using Bootstrap 4, Laravel 5 and MySQL. Project was bulit for the unit "Software Engineering Practice G" at University of Canberra.`,
          repo: 'https://github.com/WalterVetrivel/sep_laravel_company_website',
          demoUrl: null,
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
          repo: 'https://github.com/WalterVetrivel/react-recipe-search',
          demoUrl: 'https://suspicious-kepler-5fa339.netlify.com/recipes',
          image: Recipes,
        },
        {
          title: 'Bootstrap Resume Template',
          technology: ['Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
          description: `A simple single-page responsive resume template built using HTML5, CSS3, JavaScript and Bootstrap 4.`,
          repo: 'https://github.com/WalterVetrivel/bootstrap_resume_1',
          demoUrl: 'https://hopeful-volhard-518e2d.netlify.com/',
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
