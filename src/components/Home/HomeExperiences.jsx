import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import './HomeExperiences.sass';

export const HomeExperiences = (props) => {
  const data = [
    {
      id: 1,
      img: 'https://la-leyenda.com/img/demo/testimonios/video1.png',
      video: '',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Pablo Echeverry',
    },
    {
      id: 2,
      img: 'https://la-leyenda.com/img/demo/testimonios/video2.png',
      video: '',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Dra. Vicky Charris',
    },
    {
      id: 3,
      img: 'https://la-leyenda.com/img/demo/testimonios/video3.png',
      video: '',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Edward Vega',
    },
    {
      id: 4,
      img: 'https://la-leyenda.com/img/demo/testimonios/video4.png',
      video: '',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Jorge Hernán López',
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
            <div className="HomeExperiences-testimonials-video">
              <a href="?">
                <img src={item.img} alt={item.author} />
                <span>
                  <FontAwesomeIcon icon={faPlay}/>
                </span>
              </a>
            </div>
            <div className="HomeExperiences-testimonials-content">
              <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
              <p>{item.content}</p>
              <p><b>{item.author}</b></p>
              <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
