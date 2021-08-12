import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import './Produccion.sass';

export const Produccion = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#00c4ce"
          title="Experiencia y profesionalismo <span>a tu alcance</span>"
          image="demo.png"
          isWhite
        />
      }
    >
      <div className="Content Produccion">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/produccion.png" alt="Motion factory studios" />
          <h1>PRODUCCIÓN <br /> DE VIDEO</h1>
          <p>Nos comprometemos con la realización profesional de los proyectos audiovisuales que tengas en mente, sin importar su complejidad. Ha llegado el momento de ofrecer a tus clientes una perspectiva innovadora de los productos y servicios que componen tu oferta comercial.</p>
          <p>La producción audiovisual se ha convertido en la mejor carta de presentación para tu marca, incluyendo formatos multiplataforma de alto impacto visual resultado del trabajo interdisciplinario de todo un equipo de profesionales comprometido con tus necesidades. Desarrollamos contenidos dinámicos orientados a diferenciar tu negocio en el mercado, transmitiendo su esencia y sus valores representativos para conectar con las creencias profundas de cada cliente potencial interesado en la oferta de valor de tu marca.</p>
          <p>Un video corporativo de impecable calidad visual impacta en la mejora del tráfico hacia los canales de difusión donde este es presentado (principalmente página web y redes sociales) mejora el posicionamiento en motores de búsqueda cómo Google y tiene un poder de conversión en ventas mucho más alto que los medios tradicionales, sumado al impacto en la recordación de los clientes potenciales que conforman tu nicho de mercado.</p>
          <p>Las nuevas tecnologías de la información han modificado la dinámica en que los consumidores se relacionan con las marcas de su preferencia; grandes volúmenes de información son procesados a través de internet en cuestión de segundos... razón por la cual cada vez más empresas se han visto en la necesidad de generar contenidos en video de mayor impacto, transformando la relación con sus audiencias y mejorando la percepción actual de sus clientes en medio de un panorama digital en constante crecimiento.</p>
          <p>Es momento de conocer los beneficios asociados con la producción de contenidos audiovisuales que refuercen estratégicamente la presencia de tu marca. Mejora el rendimiento comercial de tu negocio en plena era digital, fortaleciendo los márgenes de ventas en comparación con la competencia.</p>
        </div>
        <div className="content-row">
          <Phrases page="produccion"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="/portafolio"/>
        </div>
      </div>
    </Layout>
  );
};
