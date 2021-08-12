import React from 'react';
import './HomeContent.sass';

export const HomeContent = (props) => {
  return (
    <div className="HomeContent">
      <div className="HomeContent-title">
        <h1>MOTION <br /> FACTORY STUDIOS</h1>
        <p><b>Somos una agencia publicitaria especializada</b> en impulsar marcas y posicionarlas en el mercado.</p>
      </div>
      <div className="HomeContent-img">
        <img src="https://la-leyenda.com/img/demo/home.png" alt="Motion Factory Studios" />
      </div>
      <div className="HomeContent-description">
        <p><b>Ofrecemos un completo catálogo de servicios profesionales para empresas,</b> contamos con infraestructura y tecnología propia además del respaldo de un equipo altamente profesional comprometido con las necesidades de nuestros clientes.</p>
      </div>
    </div>
  );
};
