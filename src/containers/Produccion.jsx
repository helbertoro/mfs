import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';

export const Produccion = (props) => {
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
      <div className="Content">
        Producción
      </div>
    </Layout>
  );
};

Produccion.propTypes = {

};

Produccion.defaultProps = {

};
