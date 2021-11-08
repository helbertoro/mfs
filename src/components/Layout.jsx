import React from 'react';
import PropTypes from 'prop-types';
import { Top } from './Top/Top.jsx';
import { Footer } from './Footer/Footer.jsx';
import { ContactFooter } from './Footer/ContactFooter.jsx';
import './Layout.sass';

export const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Layout-top">
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
