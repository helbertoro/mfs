import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './HomeExperiences.sass';

export const HomeExperiences = (props) => {
  return (
    <div className="HomeExperiences">
      <div className="HomeExperiences-title">
        <p><b>Experiencias reales</b> <br /> que nos inspiran</p>
      </div>
      <div className="HomeExperiences-testimonials">
        <div className="HomeExperiences-testimonials-item">
          <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus</p>
          <p><b>Dra. Luisa Plata</b></p>
          <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
        </div>
        <div className="HomeExperiences-testimonials-item">
          <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
          <p>Suscipit nunc porttitor tincidunt tempor ullamcorper phasellus nullam habitant</p>
          <p><b>Sabana Race</b></p>
          <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
        </div>
        <div className="HomeExperiences-testimonials-item">
          <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
          <p>Venenatis semper quisque tellus montes ante a parturient non</p>
          <p><b>Dr. Raul Daza</b></p>
          <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
        </div>
      </div>
    </div>
  );
};

HomeExperiences.propTypes = {

};

HomeExperiences.defaultProps = {

};
