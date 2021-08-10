import React from 'react';
import { Top } from './Top/Top.jsx';
import { Footer } from './Footer/Footer.jsx';
import './Layout.sass';

export const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Layout-top">
        <Top/>
        {props.banner}
      </div>
      {props.children}
      <Footer/>
    </div>
  );
};
