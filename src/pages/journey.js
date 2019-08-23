import React, { useState } from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/layout/header';

const Journey = () => {
  const [headerText] = useState({
    title: `Welcome to my journey!`,
    subtitle: `Follow my journey through time and space in the world of web development.`,
    subtitle2: `Do check out the things I've created on this journey.`,
    showPortfolioLink: true,
    showGithubLink: true,
    className: 'journey-hero',
  });

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
    </Layout>
  );
};

export default Journey;
