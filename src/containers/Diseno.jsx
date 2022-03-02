import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import "./Diseno.sass";

export const Diseno = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="Proyecta profesionalmente la identidad de <span>tu marca</span>"
          image="diseno-grafico.jpg"
        />
      }
    >
      <div className="Content Diseno">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/diseno-1.jpg" alt="Motion factory studios" />
          <h1>DISEÑO GRÁFICO</h1>
          <p>El diseño gráfico es fundamental a la hora de resaltar los atributos que diferencian tu negocio, combinando una serie de técnicas y procedimientos estratégicos destinados a reforzar la comunicación visual de tu marca y diferenciarla de sus competidores directos. La imagen en sí misma es un recurso poderoso, dado que permite expresar conceptos de alta complejidad de manera clara e impactante, sirviendo como recurso al desarrollo del plan de comunicación estratégica que incentiva el posicionamiento de los negocios en el mercado.</p>
          <p>Millones de usuarios y clientes potenciales alrededor del mundo se encuentran inmersos en una cultura que privilegia la divulgación de contenidos visuales; en los medios digitales y las redes sociales circulan diariamente imágenes que representan ideas y formas de ver el mundo, transformando la realidad de las personas no solo por su poder persuasivo, sino además por su simplicidad e impacto.</p>
          <p>Es la imagen un recurso potencial para las empresas que desean presentar con claridad los valores diferenciales de su negocio, demostrar afinidad con sus compradores, resaltar las características de sus productos o servicios y desde luego fortalecer el sentido de pertenencia de sus trabajadores. La recordación y el éxito de las grandes corporaciones alrededor del mundo no solo se debe a la excelencia de su labor operativa y comercial, sino además a la implementación de una imagen corporativa clara que refleje sus valores y trascienda en el tiempo.</p>
        </div>
        <div className="Content-row">
          <img className="Content-img-left" src="https://la-leyenda.com/img/demo/diseno-2.jpg" alt="Motion factory studios" />
          <p>Con el auge de las redes sociales y el impulso comercial que brindan las herramientas digitales al crecimiento de los negocios, el diseño gráfico se ha convertido en la mejor herramienta para lograr grandes avances en la construcción de una marca sólida y de gran prestigio para sus compradores potenciales, logrando una integración precisa entre el contenido del mensaje y su forma, trabajando siempre en función de facilitar la interpretación de los usuarios con los valores que transmiten las empresas y el impacto de su imagen corporativa.</p>
          <p>Sin dudarlo, la primera impresión es determinante a la hora de captar la atención de tus clientes y visibilizar tu negocio sobresaliendo frente a la competencia. Para ello ofrecemos una extensa gama de soluciones gráficas para el manejo integral del branding corporativo de tu empresa: Creación de branding e imagen corporativa, creación de material P.O.P., diseño para campañas de marketing digital e ilustración para video.</p>
        </div>
        <div className="content-row">
          <Phrases page="diseno"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="https://www.flickr.com/photos/195072671@N07/albums/72177720296911132"/>
        </div>
      </div>
    </Layout>
  );
};
