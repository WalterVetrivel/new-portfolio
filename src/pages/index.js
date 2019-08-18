import React, { useEffect } from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';

import '../styles/index.scss';

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {});
  });

  return (
    <Layout>
      <Hero />
      <main>
        <Intro />
      </main>
    </Layout>
  );
};

export default IndexPage;
