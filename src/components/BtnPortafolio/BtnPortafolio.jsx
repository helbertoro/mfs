import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import './BtnPortafolio.sass';

export const BtnPortafolio = (props) => {
  return (
    <a
      className="BtnPortafolio"
      style={{backgroundColor: props.color}}
      href="?"
      target="_blank"
    >
      PORTAFOLIO
      <div className="BtnPortafolio-icon">
        <FontAwesomeIcon style={{color: props.color}} icon={faMousePointer}/>
      </div>
    </a>
  );
};

BtnPortafolio.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string,
};

BtnPortafolio.defaultProps = {
  color: '#0070ac'
};
