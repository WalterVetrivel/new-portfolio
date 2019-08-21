import React from 'react';
import SEO from '../seo';
import Navbar from './navbar';
import Footer from './footer';

const Layout = props => (
  <React.Fragment>
    <SEO title={props.title} />
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default Layout;
