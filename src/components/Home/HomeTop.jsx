import React from 'react';
import './HomeTop.sass';

export const HomeTop = (props) => {
  const Data = [
    {
      id: 1,
      icon: 'home_icon_video.png',
      title: 'Producción de video',
      description: 'Realizamos contenido profesional de manera 100% efectiva.',
    },
    {
      id: 2,
      icon: 'home_icon_transmision.png',
      title: 'Transmisiones en vivo',
      description: 'Interactúa con tu grupo objetivo en tiempo real.',
    },
    {
      id: 3,
      icon: 'home_icon_marketing.png',
      title: 'Marketing digital',
      description: '¡Asegura el crecimiento comercial de tu negocio en redes sociales!',
    }
  ];

  return (
    <div className="HomeTop">
      {Data.map((item) => (
        <div
          key={`index-${item.id}`}
          className="HomeTop-card"
        >
          <img src={`https://la-leyenda.com/img/demo/${item.icon}`} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
