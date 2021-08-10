import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import './BtnPortafolio.sass';

export const BtnPortafolio = (props) => {
  return (
    <a
      className="BtnPortafolio"
      href="?"
      target="_blank"
    >
      PORTAFOLIO
      <div className="BtnPortafolio-icon">
        <FontAwesomeIcon icon={faMousePointer}/>
      </div>
    </a>
  );
};

BtnPortafolio.propTypes = {
  url: PropTypes.string,
};
