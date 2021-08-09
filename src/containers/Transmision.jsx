import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';

export const Transmision = (props) => {
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
      <div className="Content">
        <div className="Content-row">
          <img className="Content-img-right" src="http://clinicanova.com.co/img/demo/internal/home-1.png" alt="Motion factory studios" />
          <h1>TRANSMISIONES <br /> DE VIDEO EN VIVO</h1>
          <p>Impulsado por las nuevas tecnologías de la información y el poder de difusión de las redes sociales, las transmisiones de video en vivo combinan la más avanzada tecnología en registro de video con la intención de impulsar los productos y servicios de tu marca entre miles de seguidores interesados en la propuesta de valor de tu negocio. Ofrecemos un trabajo profesional para proyectar desde diferentes ángulos tus eventos, clases, capacitaciones, charlas virtuales o webinar.</p>
          <p>Sabemos que el streaming es hoy en día una potente herramienta para las compañías interesadas en transmitir eventos en vivo, reuniones y clases por internet representando una gran ventaja frente a la competencia y mejorando el reconocimiento de tu marca en el entorno digital.</p>
          <p>Nuestra plataforma de streaming integra la transmisión de manera simultánea en cada uno de tus medios digitales: página web, Facebook, Instagram y tu canal de YouTube, garantizando de esa manera la mejor calidad de imagen que tu dispositivo pueda recibir.</p>
          <p>Contamos con personal técnico totalmente certificado y un completo despliegue de dispositivos tecnológicos compuesto por grúas de televisión, estabilizadores de cámaras, cámaras 4K, pantallas y sonido para que tu público no se pierda ningún detalle del evento.</p>
          <p>Actualmente el video en medios digitales genera hasta un 80% del tráfico total de internet, el streaming digital para negocios se ha convertido en la mejor alternativa para visibilizar tu negocio y exponer en detalle las ventajas de tus productos y servicios, captando nuevas audiencias y compradores potenciales interesados en tu marca. Conferencias, eventos promocionales y lanzamientos de producto, es momento de impulsar la imagen de tu maca a través de las nuevas plataformas de comercialización virtual en sintonía con los avances de la era digital.</p>
          <p>Además de la calidad en la imagen y la estabilidad de la transmisión, los streaming digitales para negocios te permiten generar conversaciones e interacción con seguidores reales interesados en profundizar sobre el valor agregado de tu marca; además de ser una alternativa cómoda y rentable para tus compradores potenciales, dado que solo requieren tener a la mano un computador y conexión a internet estable para ser parte de los espacios digitales donde tu marca es impulsada.</p>
        </div>
        <div className="Content-row">
          Te invitamos a que conozcas una
          NUEVA FORMA DE TRANSMITIR TUS EVENTOS
          e impactar en tus audiencias digitales
        </div>
      </div>
    </Layout>
  );
};

Transmision.propTypes = {

};

Transmision.defaultProps = {

};
