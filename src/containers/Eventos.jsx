import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { BtnPortafolio } from '../components/BtnPortafolio/BtnPortafolio.jsx';
import { Phrases } from '../components/Phrases/Phrases.jsx';
import "./Eventos.sass";

export const Eventos = (props) => {
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
      <div className="Content Eventos">
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/internal/home-1.png" alt="Motion factory studios" />
          <h1>EVENTOS <br /> CORPORATIVOS</h1>
          <p>Los eventos corporativos se han convertido en la mejor alternativa al momento de posicionar la imagen de tu negocio entre directivos y trabajadores, mejorando las relaciones internas del equipo de trabajo al funcionar como la plataforma ideal plataforma para visibilizar los planes estratégicos del negocio o por motivo de la conmemoración de celebraciones especiales.</p>
          <p>Para garantizar una realización de eventos exitosa se necesita tener en cuenta algunos aspectos esenciales relacionados con el objetivo principal del encuentro, estructurar un cronograma de actividades riguroso que garantice una excelente producción logística y desde luego contar con un despliegue audiovisual que incluya todos los recursos tecnológicos necesarios para brindar a los asistentes una experiencia profesional de principio a fin.</p>
          <p>En medio de la pandemia y con la intención de adaptar nuestro modelo de trabajo a la actual situación mundial, hemos previsto de manera complementaria el desarrollo de eventos virtuales con el mismo impacto y acogida que los espacios de encuentro en modalidad presencial; las nuevas tendencias están orientadas al aprovechamiento de las ventajas que ofrece el mundo digital y la conectividad masiva, permitiendo que cientos de participantes sean convocados al encuentro sin importar el lugar del mundo desde donde se conecten, garantizando la protección total de su integridad.</p>
        </div>
        <div className="Content-row">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/internal/home-1.png" alt="Motion factory studios" />
          <p>Al momento de conceptualizar un evento tratamos en todo momento de resaltar la importancia de tu marca durante el desarrollo del mismo, empleando estratégicamente todos los recursos a disposición para presentar el punto diferencial de tu negocio frente a los clientes, contactos, socios, proveedores y seguidores de la marca. Desde esta perspectiva, los eventos se entienden como un canal más en la estrategia de comunicación de tu negocio, razón por la cual es fundamental priorizar en la creación de una experiencia de marca inigualable que impacte positivamente en los asistentes y fortalezca las relaciones comerciales derivadas de estos encuentros.</p>
          <p>Por otro lado, el poder de convocatoria de estos encuentros suele reafirmar su conveniencia al momento de formular una estrategia de posicionamiento de marca frente a tus rivales comerciales, en el caso de seminarios y espacios de capacitación, se garantiza que los asistentes al evento se encuentren realmente interesados en los temas a tratar sirviendo como herramienta de convocatoria para clientes reales dispuestos a establecer relaciones de largo plazo con tu negocio. Este es un punto fundamental para complementar la estrategia de posicionamiento de tu negocio, impulsando progresivamente el reconocimiento de tu marca y su reputación en el mercado.</p>
          <p>En Motion Factory Studios entendemos la importancia de trabajar con profesionalismo brindando a nuestros clientes espacios de encuentro en modalidad presencial o virtual, según los intereses de sus asistentes; por esta razón contamos con un amplio despliegue de recursos tecnológicos para brindar a los participantes de tus encuentros una experiencia audiovisual inmejorable, brindando acompañamiento integral en el montaje de eventos corporativos, fiestas, conferencias y capacitaciones, ultimando hasta el más mínimo detalle para garantizar una impecable realización en cumplimiento de los protocolos actuales de bioseguridad.</p>
        </div>
        <div className="content-row">
          <Phrases page="eventos"/>
        </div>
        <div className="content-row">
          <BtnPortafolio url="/portafolio"/>
        </div>
      </div>
    </Layout>
  );
};
