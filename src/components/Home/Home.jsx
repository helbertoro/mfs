import React from 'react';
import { HomeTop } from './HomeTop.jsx';
import { HomeContent } from './HomeContent.jsx';
import { HomePortafolio } from './HomePortafolio.jsx';
import { HomeExperiences } from './HomeExperiences.jsx';

export const Home = (props) => {
  return (
    <div className="Home">
      <HomeTop/>
      <HomeContent/>
      <HomePortafolio/>
      <HomeExperiences/>
    </div>
  );
};
