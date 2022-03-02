import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import "./Web.sass";

export const Web = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="Mejora el impacto de tu empresa <span>en internet</span>"
          image="web.jpg"
        />
      }
    >
      <div className="Content Web">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/web.png" alt="Motion factory studios" />
          <h1>SITIOS WEB</h1>
          <p>Contamos con un completo equipo especializado en creación de páginas web fácilmente administrables, diseñadas para brindar a los usuarios una experiencia de navegación intuitiva y amigable cumpliendo con las exigencias de posicionamiento establecidas por Google. Ofrecemosz acompañamiento integral a nuestros clientes, brindando servicios de soporte técnico, administración de contenidos y estrategias de posicionamiento web destinadas a aumentar el tráfico de visitantes en cada sitio web.</p>
        </div>
        <div className="content-row">
          <Phrases page="web"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="https://www.flickr.com/photos/195072671@N07/albums/72177720296911132"/>
        </div>
      </div>
    </Layout>
  );
};
