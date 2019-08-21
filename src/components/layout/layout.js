import React from 'react';
import Navbar from './navbar';

const Layout = props => (
  <React.Fragment>
    <Navbar />
    {props.children}
  </React.Fragment>
);

export default Layout;
