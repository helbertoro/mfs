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
          title="Experiencia y profesionalismo <span>a tu alcance</span>"
          image="demo.png"
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
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/video.jpg" alt="Producción de video" />
                <span>Producción de video</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/transmision.jpg" alt="" />
                <span>Transmisiones en vivo</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/marketing.jpg" alt="" />
                <span>Marketing digital</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/web.jpg" alt="" />
                <span>Diseño web</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/diseno.jpg" alt="" />
                <span>Diseño gráfico</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/portafolio/foto.jpg" alt="" />
                <span>Fotografía profesional</span>
              </a>
            </div>
            <div className="Portafolio-content-item">
              <a href="?">
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
