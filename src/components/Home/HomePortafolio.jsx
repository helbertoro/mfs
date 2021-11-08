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
            <a href="/servicios/produccion-de-video">
              <img src="https://la-leyenda.com/img/demo/portafolio/video.jpg" alt="Producción de video" />
              <span>Producción de video</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/transmisiones-de-video-en-vivo">
              <img src="https://la-leyenda.com/img/demo/portafolio/transmision.jpg" alt="" />
              <span>Transmisiones en vivo</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/marketing-digital">
              <img src="https://la-leyenda.com/img/demo/portafolio/marketing.jpg" alt="" />
              <span>Marketing digital</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/sitios-web">
              <img src="https://la-leyenda.com/img/demo/portafolio/web.jpg" alt="" />
              <span>Diseño web</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/diseño-grafico">
              <img src="https://la-leyenda.com/img/demo/portafolio/diseno.jpg" alt="" />
              <span>Diseño gráfico</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/fotografia-profesional">
              <img src="https://la-leyenda.com/img/demo/portafolio/foto.jpg" alt="" />
              <span>Fotografía profesional</span>
            </a>
          </div>
          <div className="HomePortafolio-content-item">
            <a href="/servicios/eventos-corporativos">
              <img src="https://la-leyenda.com/img/demo/portafolio/eventos.jpg" alt="" />
              <span>Eventos corporativos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
