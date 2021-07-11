import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm.jsx';
import { Social } from './Social.jsx';
import './Footer.sass';

export const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="Footer-wrapper">
        <div className="Footer-content">
          <h5>¡Estás a un clic de iniciar una experiencia que revolucionará tu marca!</h5>
          <ul>
            <li>
              icon
              <span>PBX: 571- 472 5933</span>
            </li>
            <li>
              icon
              <span>Móvil: (57) 310 785 1233</span>
            </li>
            <li>
              icon
              <span>info@motionfactorystudios.com</span>
            </li>
          </ul>
        </div>
        <div className="Footer-form">
          <ContactForm/>
        </div>
        <div className="Footer-social">
          <Social/>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {

};

Footer.defaultProps = {

};
