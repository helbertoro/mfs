import React from 'react';
import PropTypes from 'prop-types';
import './HomeTop.sass';

export const HomeTop = (props) => {
  const Data = [
    {
      id: 1,
      icon: 'home_icon_video.png',
      title: 'Producción de video',
      description: 'Creamos experiencias audiovisuales diferenciadoras',
    },
    {
      id: 2,
      icon: 'home_icon_transmision.png',
      title: 'Transmisiones en vivo',
      description: 'Difusión en video de alta calidad para eventos y lanzamientos de producto',
    },
    {
      id: 3,
      icon: 'home_icon_marketing.png',
      title: 'Marketing digital',
      description: 'Impulsamos estratégicamente el crecimiento de tu negocio en redes sociales',
    }
  ];

  return (
    <div className="HomeTop">
      {Data.map((item) => (
        <div
          key={`index-${item.id}`}
          className="HomeTop-card"
        >
          <img src={`http://clinicanova.com.co/img/demo/${item.icon}`} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

HomeTop.propTypes = {

};

HomeTop.defaultProps = {

};
