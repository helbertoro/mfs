import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { Social } from '../components/Footer/Social';
import './Contacto.sass';

export const Contacto = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited');
  };

  return (
    <Layout
      contactFooter
      banner={
        <Banner
          color="#FFFFFF"
          title="Experiencia y profesionalismo <span>a tu alcance</span>"
          image="contacto.jpg"
        />
      }
    >
      <div className="Contacto">
        <h1>CONTACTO</h1>
        <div className="Contacto-content">
          <div className="Contacto-form">
            <form onSubmit={event => handleSubmit(event)}>
              <input className="Contacto-form-element" type="text" name="name" placeholder="Nombre*"/>
              <input className="Contacto-form-element" type="text" name="email" placeholder="Correo electrónico*"/>
              <input className="Contacto-form-element" type="text" name="telefono" placeholder="Telefono"/>
              <textarea className="Contacto-form-element" name="Message" placeholder="Mensaje" cols="30" rows="4"></textarea>
              <button
                type="submit"
                className="Contacto-form-button"
              >
                enviar
              </button>
            </form>
          </div>
          <div className="Contacto-redes">
            <h2><b>¡Estás a un clic de iniciar</b> <br /> una experiencia que revolucionará tu marca!</h2>
            <Social/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
