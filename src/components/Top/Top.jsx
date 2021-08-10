import React from 'react';
import './Top.sass';

export const Top = (props) => {
  return (
    <div className="Top">
      <div className="Top-wrapper">
        <a className="Top-wrapper-logo" href="/">
          <figure>
            <img src="http://clinicanova.com.co/img/demo/logo.png" alt="Motion Factory Studios" />
          </figure>
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><span>Servicios</span>
              <ul className="Top-submenu">
                <li><a href="/servicios/produccion-de-video">Producción de video</a></li>
                <li><a href="/servicios/transmisiones-de-video-en-vivo">Transmisiones de video en vivo</a></li>
                <li><a href="/servicios/marketing-digital">Marketing digital</a></li>
                <li><a href="/servicios/sitios-web">Sitios web</a></li>
                <li><a href="/servicios/diseño-grafico">Diseño gráfico</a></li>
                <li><a href="/servicios/fotografia-profesional">Fotografía profesional</a></li>
                <li><a href="/servicios/eventos-corporativos">Eventos corporativos</a></li>
              </ul>
            </li>
            <li><a href="/portafolio">Portafolio</a></li>
            <li><a href="?">Blog</a></li>
            <li><a href="?">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
