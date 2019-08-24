import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Header
      title="Error 404."
      subtitle="Page not found."
      className="error-hero"
    ></Header>
  </Layout>
);

export default NotFoundPage;
