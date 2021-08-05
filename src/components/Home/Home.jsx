import React from 'react';
import PropTypes from 'prop-types';
import { HomeTop } from './HomeTop.jsx';
import { HomeContent } from './HomeContent.jsx';
import { HomePortafolio } from './HomePortafolio.jsx';

export const Home = (props) => {
  return (
    <div className="Home">
      <HomeTop/>
      <HomeContent/>
      <HomePortafolio/>
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};
