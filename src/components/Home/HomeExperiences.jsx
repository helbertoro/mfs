import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './HomeExperiences.sass';

export const HomeExperiences = (props) => {
  const data = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Dra. Luisa Plata',
    },
    {
      id: 2,
      content: 'Suscipit nunc porttitor tincidunt tempor ullamcorper phasellus nullam habitant',
      author: 'Sabana Race',
    },
    {
      id: 3,
      content: 'Venenatis semper quisque tellus montes ante a parturient non',
      author: 'Dr. Raul Daza',
    },
  ];

  return (
    <div className="HomeExperiences">
      <div className="HomeExperiences-title">
        <p><b>Experiencias reales</b> <br /> que nos inspiran</p>
      </div>
      <div className="HomeExperiences-testimonials">
        {data.map((item) => (
          <div key={`HomeExperiences-testimonials-${item.id}`} className="HomeExperiences-testimonials-item">
            <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
            <p>{item.content}</p>
            <p><b>{item.author}</b></p>
            <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
          </div>
        ))}
      </div>
    </div>
  );
};

HomeExperiences.propTypes = {

};

HomeExperiences.defaultProps = {

};
