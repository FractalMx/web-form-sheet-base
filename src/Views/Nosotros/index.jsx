import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Nosotros.css';

const images = [
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers"
];
export default function Nosotros () {
  return (
    <div className="nosotros-container">
    <h2 className="section-title">Sobre Nosotros</h2>
    <div className="content">
      <div className="text">
        <p>
          Somos una empresa apasionada por la belleza y la complejidad de la fractalidad.
          Nuestro objetivo es explorar y difundir el mundo fascinante de los fractales,
          desde sus aplicaciones en matemáticas hasta sus manifestaciones en la naturaleza y el arte.
        </p>
        <p>
          Nuestra misión es educar e inspirar a las personas a través de talleres, charlas
          y recursos en línea, para que puedan comprender y apreciar la maravilla de la fractalidad
          en todas sus formas.
        </p>
        <p>
          En nuestra búsqueda de la comprensión de los fractales, hemos colaborado con expertos en
          matemáticas y artistas visionarios. Estamos dedicados a compartir nuestro conocimiento
          y pasión con la comunidad global.
        </p>
      </div>
     
      <div className="image-list">
          <TransitionGroup className="image-list">
            {images.map((image, index) => (
              <CSSTransition key={index} timeout={500} classNames="image-transition">
                <div className="image">
                  <img src={image} alt={`Fractal ${index}`} />
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

