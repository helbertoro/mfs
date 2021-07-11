import React from 'react';
import PropTypes from 'prop-types';
import { Top } from './Top/Top.jsx';
import { Banner } from './Banner/Banner.jsx';
import { Footer } from './Footer/Footer.jsx';
import './Layout.sass';

export const Layout = (props) => {
  return (
    <div className="Layout">
      <Top/>
      <Banner/>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {

};

Layout.defaultProps = {

};
