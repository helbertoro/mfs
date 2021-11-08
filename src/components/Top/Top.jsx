import React from 'react';
import { NavLink } from 'react-router-dom';
import './Top.sass';

export const Top = () => {
  return (
    <div className="Top">
      <div className="Top-wrapper">
        <a className="Top-wrapper-logo" href="/">
          <figure>
            <img src="https://la-leyenda.com/img/demo/logo.png" alt="Motion Factory Studios" />
          </figure>
        </a>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            <li><span>Servicios</span>
              <ul className="Top-submenu">
                <li><NavLink to="/servicios/produccion-de-video">Producción de video</NavLink></li>
                <li><NavLink to="/servicios/transmisiones-de-video-en-vivo">Transmisiones de video en vivo</NavLink></li>
                <li><NavLink to="/servicios/marketing-digital">Marketing digital</NavLink></li>
                <li><NavLink to="/servicios/sitios-web">Sitios web</NavLink></li>
                <li><NavLink to="/servicios/diseño-grafico">Diseño gráfico</NavLink></li>
                <li><NavLink to="/servicios/fotografia-profesional">Fotografía profesional</NavLink></li>
                <li><NavLink to="/servicios/eventos-corporativos">Eventos corporativos</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
