import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './ContactFooter.sass';

export const ContactFooter = (props) => {
  return (
    <div className="ContactFooter">
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhoneAlt}/>
          <span>PBX: 571- 623 3606</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMobileAlt}/>
          <span>Móvil: (57) 310 785 1233</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope}/>
          <span>info@motionfactorystudios.com</span>
        </li>
        <li>
          <span>Bogotá - Colombia</span>
        </li>
      </ul>
    </div>
  );
};
