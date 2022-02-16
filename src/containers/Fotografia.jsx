import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import "./Fotografia.sass";

export const Fotografia = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#c6a151"
          title="Fotografía <br/> de alto impacto <span>para tu marca</span>"
          image="fotografia.jpg"
          isWhite
        />
      }
    >
      <div className="Content Fotografia">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/fotografia.jpg" alt="Motion factory studios" />
          <h1>FOTOGRAFÍA <br /> PROFESIONAL</h1>
          <p>La potencia y expresividad visual de una buena fotografía, son elementos distintivos que permitirán reflejar las características de tu negocio. Ofrecemos fotografía digital para producto, eventos y publicitaria, adecuada a los parámetros técnicos necesarios para su utilización en medios impresos y redes sociales.</p>
          <p>La fotografía profesional resalta el valor de tu negocio y su oferta comercial, captando la atención de los clientes potenciales en favor de la compra de tus productos y servicios. La imagen de tu marca es fundamental para crear lazos de confianza con tus futuros compradores, permitiéndote además fortalecer la presencia digital de tu negocio en redes sociales y buscadores web, aumentando las conversiones y el volumen de ventas derivado de su impacto visual.</p>
          <p>Nos caracteriza el profesionalismo y la calidad, ofreciendo a nuestros clientes imágenes altamente impactantes, captadas con los más avanzados equipos de producción fotográfica disponibles en el mercado. De igual manera nuestro equipo de diseñadores gráficos especializados en edición digital de imágenes, procesarán el material recopilado ofreciendo el máximo despliegue visual de cada fotografía, haciéndola más impactante y atractiva para tus clientes.</p>
          <p>La fotografía ha cobrado una relevancia determinante en el mundo del marketing y la publicidad. Una práctica en constante evolución que se ha visto enriquecida recientemente con la llegada de las nuevas tecnologías, destinadas a maximizar el potencial visual de las imágenes para hacerlas más atractivas y explotar todo su impacto aparente en favor de los negocios y las marcas asociadas a estas.</p>
          <p>El recurso ideal en plena era digital... prepárate para transmitir cientos de conceptos en una sola imagen, por medio de un catálogo fotográfico profesional a la altura de las necesidades de tu negocio.</p>
        </div>
        <div className="content-row">
          <Phrases page="fotografia"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="/portafolio"/>
        </div>
      </div>
    </Layout>
  );
};
