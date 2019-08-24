import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Intro from '../components/index/intro';
import Banner from '../components/layout/banner';
import LinkCards from '../components/index/link-cards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
  const [headerText] = useState({
    title: `Hi! I'm Walter Selvakumar!`,
    subtitle: `I'm a full-stack web developer and programmer.`,
    showPortfolioLink: true,
    showGithubLink: true,
    className: 'index-hero',
  });

  const [introText] = useState(`<p class="paragraph">
          Hi there! I'm Walter, a full-stack web developer with a passion for
          programming. I like learning new technologies and am not shy to delve
          into new tools and frameworks. I mainly work with JavaScript, but I
          can also code in Java and PHP, and I can quickly learn the syntax of a
          new language.
        </p>
        <p class="paragraph">
          When I'm not furiously typing into Visual Studio Code, I like hanging
          out with friends, playing chess and table tennis.
        </p>`);

  return (
    <Layout title="Home">
      <Header
        title={headerText.title}
        subtitle={headerText.subtitle}
        showPortfolioLink={headerText.showPortfolioLink}
        showGithubLink={headerText.showGithubLink}
        className={headerText.className}
      />
      <main>
        <Intro introText={introText} />
        <Banner className="index-banner">
          <h1 className="banner-text">I build modern, responsive websites</h1>
          <Link to="/portfolio" className="btn btn-main">
            See my portfolio&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Banner>
        <LinkCards />
      </main>
    </Layout>
  );
};

export default IndexPage;
