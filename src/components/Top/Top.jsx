import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../statics/images/MFS.png';
import './Top.sass';

export const Top = (props) => {
  return (
    <div className="Top">
      <div className="Top-wrapper">
        <figure>
          <img src={Logo} alt="Motion Factory Studios" />
        </figure>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><span>Servicios</span>
              <ul className="Top-submenu">
                <li><a href="?">Producción de video</a></li>
                <li><a href="?">Transmisiones de video en vivo</a></li>
                <li><a href="?">Marketing digital</a></li>
                <li><a href="?">Sitios web</a></li>
                <li><a href="?">Diseño gráfico</a></li>
                <li><a href="?">Fotografía profesional</a></li>
                <li><a href="?">Eventos corporativos</a></li>
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

Top.propTypes = {

};

Top.defaultProps = {

};
