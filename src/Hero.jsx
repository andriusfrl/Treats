import React from 'react';

function Hero({ heroImg }) {
  return (
    /* --- Sección de Bienvenida (Hero) --- */
    <header id="hero" className="hero container">
      {/* Contenido Textual: Títulos y descripción principal */}
      <div className="hero-content">
        <p className="hero-subtitle">INVESTIGADOR CANINO</p>
        <h1 className="hero-title">CONOCE A TU<br />PERRO</h1>
        <p className="hero-description">
           Nuestro motor de IA analiza cada rasgo visual para darte la respuesta definitiva sobre la raza y cuidados de tu mejor amigo.
        </p>
        <a href="#ai" className="btn-accent">Prueba Ahora {'>'}</a>
      </div>

      {/* Area Visual: Imagen del detective y elemento decorativo flotante */}
      <div className="hero-visual">
        <div className="bg-blob-main"></div> {/* Figura decorativa animada en el fondo */}
        <img src={heroImg} alt="Dog Detective" className="hero-dog-img" />
      </div>
    </header>
  );
}

export default Hero;
