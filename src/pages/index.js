import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Intro from '../components/index/intro';
import Banner from '../components/index/banner';
import LinkCards from '../components/index/link-cards';

import '../styles/style.scss';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Header title="Hi! I'm Walter Selvakumar!" subtitle="I'm a full-stack web developer and programmer." showLinks className="index-hero" />
      <main>
        <Intro />
        <Banner />
        <LinkCards />
      </main>
    </Layout>
  );
};

export default IndexPage;
