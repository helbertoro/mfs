import React from 'react';
import PropTypes from 'prop-types';
import { HomeTop } from './HomeTop.jsx';
import { HomeContent } from './HomeContent.jsx';

export const Home = (props) => {
  return (
    <div className="Home">
      <HomeTop/>
      <HomeContent/>
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};
