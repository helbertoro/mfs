import React from 'react';
import './HomePortafolio.sass';

export const HomePortafolio = () => {
  return (
    <div className="HomePortafolio">
      <div className="HomePortafolio-title">
        <h4>PORTAFOLIO</h4>
        <p>¡Ideas innovadoras para <b>grandes proyectos</b>!</p>
      </div>
      <div className="Content-row">
        <div className="HomePortafolio-content">
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296912716" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/video.jpg" alt="Producción de video" />
              <span>Producción de video</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296909125" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/transmision.jpg" alt="" />
              <span>Transmisiones en vivo</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911137" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/marketing.jpg" alt="" />
              <span>Marketing digital</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911132" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/web.jpg" alt="" />
              <span>Diseño web</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911122" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/diseno.jpg" alt="" />
              <span>Diseño gráfico</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296913688" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/foto.jpg" alt="" />
              <span>Fotografía profesional</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296912666" target="_blank" rel="noreferrer">
              <img src="https://la-leyenda.com/img/demo/portafolio/eventos.jpg" alt="" />
              <span>Eventos corporativos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
