import React from 'react';

import Layout from '../components/layout/layout';
import Hero from '../components/index/hero';
import Intro from '../components/index/intro';
import Banner from '../components/index/banner';
import LinkCards from '../components/index/link-cards';
import Footer from '../components/layout/footer';

import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <main>
        <Intro />
        <Banner />
        <LinkCards />
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
