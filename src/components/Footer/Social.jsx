import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Social.sass';

export const Social = (props) => {
  return (
    <div className="Social">
      <ul>
        <li>
          <a href="?">
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
        </li>
        <li>
          <a href="?">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </li>
        <li>
          <a href="?">
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </li>
        <li>
          <a href="?">
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
