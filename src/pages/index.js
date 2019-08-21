import React from 'react';

import Layout from '../components/layout/layout';
import Hero from '../components/index/hero';
import Intro from '../components/index/intro';
import Banner from '../components/index/banner';
import LinkCards from '../components/index/link-cards';

import '../styles/style.scss';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <main>
        <Intro />
        <Banner />
        <LinkCards />
      </main>
    </Layout>
  );
};

export default IndexPage;
