import React from 'react';
import { Link } from 'gatsby';

const Banner = () => (
  <section className="banner">
    <h1 className="banner-text">I build modern, responsive websites</h1>
    <Link to="/portfolio" className="btn-main">
      See my portfolio
    </Link>
  </section>
);

export default Banner;
