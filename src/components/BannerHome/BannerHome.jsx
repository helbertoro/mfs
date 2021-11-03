import React from 'react';
import './BannerHome.sass';

export const BannerHome = (props) => {
  return (
    <div className="BannerHome">
      <div className="BannerHome-wrapper">
        <div className="BannerHome-content">
          <h3>¡HACEMOS REALIDAD TUS IDEAS!</h3>
          <p>Vive una experiencia profesional que transformará tu marca.</p>
          <a href="/contacto">COTIZA CON NOSOTROS</a>
        </div>
      </div>
    </div>
  );
};
