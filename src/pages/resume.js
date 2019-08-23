import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';

const Resume = () => (
  <Layout title="Resume">
    <Header
      title="Welcome to my resume!"
      subtitle="Get a brief overview of my skills, education and experience."
      subtitle2="To view samples of my work, visit my portfolio or my Github."
      showLinks
      className="resume-hero"
    />
  </Layout>
);

export default Resume;
