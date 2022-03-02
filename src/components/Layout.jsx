import React from 'react';
import PropTypes from 'prop-types';
import { bubble as Menu } from 'react-burger-menu'
import { Top } from './Top/Top.jsx';
import { Footer } from './Footer/Footer.jsx';
import { ContactFooter } from './Footer/ContactFooter.jsx';
import './Layout.sass';

export const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Layout-top">
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/nosotros">Nosotros</a>
          <a id="about" className="menu-item" href="/servicios">Servicios</a>
          <a id="contact" className="menu-item" href="/portafolio">Portafolio</a>
          <a id="contact" className="menu-item" href="/contacto">Contacto</a>
        </Menu>
        <Top/>
        {props.banner}
      </div>
      {props.children}
      {!props.contactFooter ? <Footer/> : <ContactFooter/>}
    </div>
  );
};

Layout.propTypes = {
  contactFooter: PropTypes.bool,
};

Layout.defaultProps = {
  contactFooter: false
};
