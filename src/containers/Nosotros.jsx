import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';

export const Nosotros = (props) => {
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
          <h2>QUIENES SOMOS</h2>
          <p className="Content-subtitle">¡Confianza basada en resultados!</p>
          <p>Somos Motion Factory Studios, una agencia publicitaria especializada en el desarrollo de soluciones estratégicas para impulsar el crecimiento de las marcas que han confiado en nosotros.</p>
          <p>Ofrecemos un completo portafolio de servicios con enfoque 360o en producción de video, fotografía, animación 2D y 3D, audio, diseño gráfico, creación de páginas web, marketing digital, transmisiones de video en vivo y lanzamientos virtuales, todo con el respaldo de un completo equipo de profesionales comprometidos con la realización de un plan de trabajo integrado, donde nuestras áreas se alinean en respuesta a las necesidades de cada cliente.</p>
          <p>Identificamos oportunidades de negocio e impulsamos el reconocimiento de nuestros clientes en medios digitales, mejorando estratégicamente el impacto de su marca y las relaciones actuales con sus clientes. Es momento de afrontar nuevos retos y vivir una transformación digital a gran escala que impulse tu negocio, de la mano de un completo equipo de trabajo preparado para ofrecerte acompañamiento personalizado en cada fase del proceso creativo.</p>
        </div>
        <div className="Content-row">
          <img className="Content-img-left" src="http://clinicanova.com.co/img/demo/internal/home-2.png" alt="Motion factory studios" />
          <h2>NUESTRO EQUIPO</h2>
          <p>odos los profesionales que conforman nuestro equipo de trabajo tienen en común un solo denominador: la pasión por cada detalle.</p>
          <p>Motion Factory Studios se encuentra conformado por profesionales capacitados en la resolución de las necesidades de nuestros clientes, plenamente comprometidos con la ejecución de un trabajo conjunto de alta calidad.</p>
        </div>
        <div className="Content-row">
          <img className="Content-img-right" src="http://clinicanova.com.co/img/demo/internal/home-3.png" alt="Motion factory studios" />
          <h2>EXPOSICIÓN DE NUESTRO PUNTO DIFERENCIAL</h2>
          <p>Nos diferencia la pasión por los detalles y la implementación de una metodología de trabajo 360o donde cada una de las áreas de trabajo participa de manera conjunta en la resolución de las necesidades de nuestros clientes. Disponemos de infraestructura propia, tecnología avanzada en registro de video y fotografía, un completo equipo de más de 30 profesionales de extensa trayectoria y una planeación estricta de las actividades a desarrollar garantizando el cumplimiento de cada proyecto.</p>
          <p>Innovación, calidad y profesionalismo son los valores que nos caracterizan, brindando en todo momento un acompañamiento cercano y personalizado a nuestros clientes que se ve reflejado en la entrega de un resultado satisfactorio sin sobrepasar los límites de tiempo y costos previstos en la planeación estratégica de cada proyecto. Es momento de impulsar el reconocimiento de tu marca en manos de un equipo profesional comprometido con las necesidades de tu negocio.</p>
        </div>
      </div>
    </Layout>
  );
};
