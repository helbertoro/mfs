import React from 'react';
import './ContactForm.sass';

export const ContactForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited');
  };

  return (
    <div className="ContactForm">
      <form onSubmit={event => handleSubmit(event)}>
        <input className="ContactForm-element" type="text" name="name" placeholder="Nombre*"/>
        <input className="ContactForm-element" type="text" name="email" placeholder="Correo electrónico*"/>
        <textarea className="ContactForm-element" name="Message" placeholder="Mensaje" cols="30" rows="4"></textarea>
        <button
          type="submit"
          className="ContactForm-button"
        >
          enviar
        </button>
      </form>
    </div>
  );
};
