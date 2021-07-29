import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { Home as HomeComponent } from '../components/Home/Home.jsx';

export const Home = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="Experiencia y profesionalismo <span>a tu alcance</span>"
          image="demo.png"
        />
      }
    >
      <HomeComponent/>
    </Layout>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};
