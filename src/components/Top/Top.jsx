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
            <li><a href="?">Home</a></li>
            <li><a href="?">Nosotros</a></li>
            <li><a href="?">Servicios</a></li>
            <li><a href="?">Portafolio</a></li>
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
