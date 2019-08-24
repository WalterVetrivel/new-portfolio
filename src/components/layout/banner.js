import React from 'react';

const Banner = props => (
  <section className={`banner ${props.className}`}>{props.children}</section>
);

export default Banner;
