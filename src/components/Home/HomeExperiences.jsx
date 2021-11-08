import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import ModalVideo from 'react-modal-video';
import './HomeExperiences.sass';

export const HomeExperiences = (props) => {
  const [video, setVideo] = useState({
    open: false,
    video: '',
  });

  const data = [
    {
      id: 1,
      img: 'https://la-leyenda.com/img/demo/testimonios/video1.png',
      video: 'jg1x2n7oXE0',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Pablo Echeverry',
    },
    {
      id: 2,
      img: 'https://la-leyenda.com/img/demo/testimonios/video2.png',
      video: 'ivD9iM81LmU',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Dra. Vicky Charris',
    },
    {
      id: 3,
      img: 'https://la-leyenda.com/img/demo/testimonios/video3.png',
      video: 'nNh6_KVhZGg',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit hendrerit vel donec senectus',
      author: 'Edward Vega',
    },
    {
      id: 4,
      img: 'https://la-leyenda.com/img/demo/testimonios/video4.png',
      video: 'ig-7rYvPr7I',
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
              <button
                onClick={()=> setVideo({
                  open: true,
                  video: item.video,
                })}
              >
                <img src={item.img} alt={item.author} />
                <span>
                  <FontAwesomeIcon icon={faPlay}/>
                </span>
              </button>
            </div>
            <div className="HomeExperiences-testimonials-content">
              <FontAwesomeIcon className="HomeExperiences-quote-left" icon={faQuoteLeft}/>
              <p>{item.content}</p>
              <p><b>{item.author}</b></p>
              <FontAwesomeIcon className="HomeExperiences-quote-right" icon={faQuoteRight}/>
            </div>
          </div>
        ))}
        <ModalVideo channel='youtube'
          autoplay
          isOpen={video.open}
          videoId={video.video}
          onClose={()=> setVideo({
            open: false,
            video: '',
          })}
        />
      </div>
    </div>
  );
};
