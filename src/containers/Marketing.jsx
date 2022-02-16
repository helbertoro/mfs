import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import "./Marketing.sass";

export const Marketing = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="!Viralizamos <br /> tu marca a través <span>de redes sociales!</span>"
          image="marketing.jpg"
        />
      }
    >
      <div className="Content Marketing">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/marketing-1.png" alt="Motion factory studios" />
          <h1>MARKETING DIGITAL</h1>
          <p>El Marketing Digital se basa en la utilización estratégica de las redes sociales para impulsar la comercialización de un producto o servicio. Sin duda, esta es una alternativa que complementa los resultados alcanzados por medio del marketing convencional garantizando resultados óptimos en la efectividad de las estrategias de comercialización offline, con el propósito de alcanzar nuevos clientes potenciales interesados en la oferta de tu marca.</p>
          <p>Los acelerados cambios en las tendencias de consumo y el auge de las redes sociales han reafirmado la importancia del marketing digital en la expansión comercial de los negocios, convirtiéndose en un aliado invaluable que proporciona resultados confiables en la medición de resultados de las campañas promocionadas y la evaluación del retorno de la inversión publicitaria en medios digitales.</p>
          <p>Estas herramientas de control y monitoreo en tiempo real permiten hacer cambios sobre la marcha en las estrategias publicitarias llevadas a cabo por tu marca, facilitando la realización de ajustes en relación con el alcance, segmentación y objetivos para maximizar la rentabilidad y las conversiones alcanzadas. Adicionalmente los anuncios diseñados son presentados selectivamente a grupos de personas que comparten intereses afines con tu marca, aumentando considerablemente las oportunidades de alcanzar ventas efectivas en comparación con los medios tradicionales.</p>
        </div>
        <div className="Content-row">
          <img className="Content-img-left" src="https://la-leyenda.com/img/demo/marketing-2.jpg" alt="Motion factory studios" />
          <p>Sumado a lo anterior, las redes sociales permiten formar comunidades de seguidores que comparten su experiencia con tus productos o servicios entre clientes potenciales interesados en conocer tu negocio. Este tipo de posicionamiento derivado del voz a voz, agrupa testimonios reales y experiencias de consumo cercanas a tu marca. Además vale la pena aclarar que los contenidos con mayor presencia e interacciones en redes sociales suelen ser videos y clips animados, dado que la configuración del algoritmo digital privilegia la difusión de este material por encima de las fotografías y diseños, siendo de especial interés a la hora de diseñar una estrategia de contenidos para tu marca, contando siempre con los servicios profesionales de una agencia especializada en planeación y creación de contenidos digitales.</p>
          <p>Las actuales tendencias en marketing digital se han visto influenciadas principalmente por los avances en programación web, permitiendo fortalecer los servicios de atención al cliente para brindar una respuesta oportuna a los nuevos compradores potenciales interesados en conocer tus productos y servicios: chatbots, búsquedas por voz, bases de datos CRM, streaming digital y aplicaciones móviles han sido los más recientes adelantos en tecnología que impulsan el crecimiento de las marcas y consolidan sólidas relaciones de confianza con sus clientes.</p>
          <p>Nada se compara con el potencial que ofrece el marketing digital para el crecimiento de tu negocio, una herramienta efectiva para mantener una relación cercana con tus clientes y seguidores, comprender sus necesidades y ofrecer productos o servicios que respondan a sus intereses. El marketing digital brinda una alternativa altamente confiable al momento de agrupar comunidades de seguidores y clientes potenciales interesados en la oferta de valor de tu negocio, influyendo de manera clara en su decisión de compra y mejorando significativamente u participación en el mercado en comparación con la competencia.</p>
          <p>En Motion Factory Studios ofrecemos un completo despliegue estratégico para impulsar el crecimiento de tu marca en redes sociales, mejorando el posicionamiento tu negocio en el entorno digital, aumentando la influencia progresiva en tus clientes. Nuestro propósito es garantizar el mayor número de conversiones posibles gracias a la gestión estratégica en tus comunidades virtuales.</p>
        </div>
        <div className="content-row">
          <Phrases page="marketing"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="/portafolio"/>
        </div>
      </div>
    </Layout>
  );
};
