import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './HomePortafolio.sass';

export const HomePortafolio = (props) => {
  const [elementToShow, setElementToShow] = useState('Producción de video');
  const data = [
    {
      id: 1,
      title: 'Producción de video',
    },
    {
      id: 2,
      title: 'Transmisiones en vivo',
    },
    {
      id: 3,
      title: 'Marketing digital',
    },
    {
      id: 4,
      title: 'Diseño web',
    },
    {
      id: 5,
      title: 'Diseño gráfico',
    },
    {
      id: 6,
      title: 'Fotografía profesional',
    },
    {
      id: 7,
      title: 'Eventos corporativos',
    },
  ];

  const handleClick = (e, item) => {
    e.preventDefault();
    setElementToShow(item)
  };

  return (
    <div className="HomePortafolio">
      <div className="HomePortafolio-title">
        <h4>PORTAFOLIO</h4>
        <p>¡Ideas innovadoras para <b>grandes proyectos</b>!</p>
      </div>
      <div className="HomePortafolio-tabs">
        <ul>
          {data.map((item) => (
            <li key={`home-portafolio-${item.id}`}>
              <a
                href="?"
                onClick={e => handleClick(e, item.title)}
                className={elementToShow === item.title ? '--active': ''}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="HomePortafolio-tabs-content">
          {elementToShow}
          <img src="http://clinicanova.com.co/img/demo/home-portafolio.png" alt="" />
        </div>
      </div>
    </div>
  );
};

HomePortafolio.propTypes = {

};

HomePortafolio.defaultProps = {

};
