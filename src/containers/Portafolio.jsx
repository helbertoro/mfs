
import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import './Portafolio.sass';

export const Portafolio = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="¡Ideas innovadoras para <span>grandes proyectos!</span>"
          image="portafolio.jpg"
        />
      }
    >
      <div className="Content Portafolio">
        <div className="Content-row">
          <div className="Portafolio-title">
            <h1>PORTAFOLIO</h1>
            <p>¡Ideas innovadoras para <br /> <b>grandes proyectos!</b></p>
          </div>
        </div>
        <div className="Content-row">
          <div className="Portafolio-content">
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296912716" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/video.jpg" alt="Producción de video" />
                <span>Producción de video</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296909125" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/transmision.jpg" alt="" />
                <span>Transmisiones en vivo</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911137" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/marketing.jpg" alt="" />
                <span>Marketing digital</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911132" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/web.jpg" alt="" />
                <span>Diseño web</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296911122" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/diseno.jpg" alt="" />
                <span>Diseño gráfico</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296913688" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/foto.jpg" alt="" />
                <span>Fotografía profesional</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="https://www.flickr.com/photos/195072671@N07/albums/72177720296912666" target="_blank" rel="noreferrer">
                <img src="https://la-leyenda.com/img/demo/portafolio/eventos.jpg" alt="" />
                <span>Eventos corporativos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
