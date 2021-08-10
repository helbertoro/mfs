import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';

export const Web = (props) => {
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
        <div className="Content-row">
          <img className="Content-img-right" src="http://clinicanova.com.co/img/demo/internal/home-1.png" alt="Motion factory studios" />
          <h1>SITIOS WEB</h1>
          <p>Contamos con un completo equipo especializado en creación de páginas web fácilmente administrables, diseñadas para brindar a los usuarios una experiencia de navegación intuitiva y amigable cumpliendo con las exigencias de posicionamiento establecidas por Google. Ofrecemosz acompañamiento integral a nuestros clientes, brindando servicios de soporte técnico, administración de contenidos y estrategias de posicionamiento web destinadas a aumentar el tráfico de visitantes en cada sitio web.</p>
        </div>
        <div className="content-row">
          <Phrases page="web"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="/portafolio"/>
        </div>
      </div>
    </Layout>
  );
};

Web.propTypes = {

};

Web.defaultProps = {

};
