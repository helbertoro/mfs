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
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/nosotros">Nosotros</NavLink></li>
            <li><span>Servicios</span>
              <ul className="Top-submenu">
                <li><NavLink exact to="/servicios/produccion-de-video">Producción de video</NavLink></li>
                <li><NavLink exact to="/servicios/transmisiones-de-video-en-vivo">Transmisiones de video en vivo</NavLink></li>
                <li><NavLink exact to="/servicios/marketing-digital">Marketing digital</NavLink></li>
                <li><NavLink exact to="/servicios/sitios-web">Sitios web</NavLink></li>
                <li><NavLink exact to="/servicios/diseño-grafico">Diseño gráfico</NavLink></li>
                <li><NavLink exact to="/servicios/fotografia-profesional">Fotografía profesional</NavLink></li>
                <li><NavLink exact to="/servicios/eventos-corporativos">Eventos corporativos</NavLink></li>
              </ul>
            </li>
            <li><NavLink exact to="/portafolio">Portafolio</NavLink></li>
            {/* <li><NavLink exact to="/blog">Blog</NavLink></li> */}
            <li><NavLink exact to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
