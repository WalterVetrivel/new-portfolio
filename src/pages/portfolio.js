import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';

const Portfolio = () => {
  const [headerText] = useState({
    title: `Welcome to my portfolio!`,
    subtitle: `Scroll to check out my main projects.`,
    subtitle2: `Also, please check out my Github using the link below.`,
    showPortfolioLink: false,
    showGithubLink: true,
    className: 'portfolio-hero',
  });

  return (
    <Layout title="Portfolio">
      <Header title={headerText.title} subtitle={headerText.subtitle} subtitle2={headerText.subtitle2} showPortfolioLink={headerText.showPortfolioLink} showGithubLink={headerText.showGithubLink} className={headerText.className} />
    </Layout>
  );
};

export default Portfolio;
