import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import './Nosotros.sass';

export const Nosotros = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="Somos un equipo de profesionales <span>100% comprometidos con tu marca</span>"
          image="demo.png"
        />
      }
    >
      <div className="Nosotros Content">
        <section className="Content-row --align-text">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/internal/home-1.png" alt="Motion factory studios" />
          <h2>QUIENES SOMOS</h2>
          <p>Somos Motion Factory Studios, una agencia publicitaria especializada en el desarrollo de soluciones estratégicas para impulsar el crecimiento de las marcas que han confiado en nosotros.</p>
          <p>Ofrecemos un completo portafolio de servicios con enfoque 360° en producción de video, fotografía, animación 2D y 3D, audio, diseño gráfico, creación de páginas web, marketing digital, transmisiones de video en vivo y lanzamientos virtuales, todo con el respaldo de un completo equipo de profesionales comprometidos con la realización de un plan de trabajo integrado, donde nuestras áreas se alinean en respuesta a las necesidades de cada cliente.</p>
          <p>Identificamos oportunidades de negocio e impulsamos el reconocimiento de nuestros clientes en medios digitales, mejorando estratégicamente el impacto de su marca y las relaciones actuales con sus clientes. Es momento de afrontar nuevos retos y vivir una transformación digital a gran escala que impulse tu negocio, de la mano de un completo equipo de trabajo preparado para ofrecerte acompañamiento personalizado en cada fase del proceso creativo.</p>
        </section>
        <section className="Content-row">
          <div className="Nosotros-equipo">
            <div className="Nosotros-equipo-title">
              <h2>NUESTRO EQUIPO</h2>
            </div>
            <div className="Nosotros-equipo-text">
              <p>Todos los profesionales que conforman nuestro equipo de trabajo tienen en común un solo denominador: la pasión por cada detalle. </p>
              <p>Motion Factory Studios se encuentra conformado por profesionales capacitados en la resolución de las necesidades de nuestros clientes, plenamente comprometidos con la ejecución de un trabajo conjunto de alta calidad.</p>
            </div>
          </div>
        </section>
        <section className="Content-row --align-text">
          <img className="Content-img-right" src="https://la-leyenda.com/img/demo/internal/home-3.png" alt="Motion factory studios" />
          <h2>NUESTRO PUNTO DIFERENCIAL</h2>
          <p>Nos diferencia la pasión por los detalles y la implementación de una metodología de trabajo 360o donde cada una de las áreas de trabajo participa de manera conjunta en la resolución de las necesidades de nuestros clientes. Disponemos de infraestructura propia, tecnología avanzada en registro de video y fotografía, un completo equipo de más de 30 profesionales de extensa trayectoria y una planeación estricta de las actividades a desarrollar garantizando el cumplimiento de cada proyecto.</p>
          <p>Innovación, calidad y profesionalismo son los valores que nos caracterizan, brindando en todo momento un acompañamiento cercano y personalizado a nuestros clientes que se ve reflejado en la entrega de un resultado satisfactorio sin sobrepasar los límites de tiempo y costos previstos en la planeación estratégica de cada proyecto. Es momento de impulsar el reconocimiento de tu marca en manos de un equipo profesional comprometido con las necesidades de tu negocio.</p>
        </section>
        <section className="Content-row">
          <div className="Nosotros-video">
            <div className="Nosotros-video-title">
              ¡IDEAS QUE <span>MARCAN</span> <br /> LA DIFERENCIA!
            </div>
            <div className="Nosotros-video-player">
              <a href="?">
                <img src="https://la-leyenda.com/img/demo/internal/nosotros-video.jpg" alt="Motion factory studios" />
                <span>
                  <FontAwesomeIcon icon={faPlay}/>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="Content-row">
          <div className="Nosotros-como">
            <h2>¿CÓMO LO HACEMOS?</h2>
            <div className="Nosotros-grid">
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">1</div>
                <div>
                  <h3>REQUERIMIENTO DEL CLIENTE</h3>
                  <p>Todo inicia con una idea.</p>
                </div>
              </div>
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">2</div>
                <div>
                  <h3>ACOMPAÑAMIENTO PERSONALIZADO</h3>
                  <p>Recibe asistencia profesional durante todo el proceso.</p>
                </div>
              </div>
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">3</div>
                <div>
                  <h3>PLANEACIÓN ESTRATÉGICA (BRAINSTORMING)</h3>
                  <p>Diseñamos un plan de acción en respuesta a tus necesidades.</p>
                </div>
              </div>
              <div className="Nosotros-grid-item --large">
                <div className="Nosotros-grid-item-number">4</div>
                <div>
                  <h3>DIRECCIONAMIENTO</h3>
                  <p>Nuestras áreas especializadas atenderán tus requerimientos en:</p>
                  <ul>
                    <li>Producción de video.</li>
                    <li>Fotografía.</li>
                    <li>Diseño gráfico y conceptualización de imagen corporativa.</li>
                    <li>Creación de páginas web.</li>
                    <li>Marketing digital.</li>
                    <li>Transmisiones de video en vivo.</li>
                    <li>Lanzamientos virtuales.</li>
                  </ul>
                </div>
              </div>
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">5</div>
                <div>
                  <h3>PRIMERA ENTREGA</h3>
                  <p>Recibe una versión preliminar de tu proyecto.</p>
                </div>
              </div>
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">6</div>
                <div>
                  <h3>AJUSTES</h3>
                  <p>Escuchamos atentamente tus sugerencias de cambio.</p>
                </div>
              </div>
              <div className="Nosotros-grid-item">
                <div className="Nosotros-grid-item-number">7</div>
                <div>
                  <h3>ENTREGA FINAL</h3>
                  <p>El resultado final se ajustará a tus expectativas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
