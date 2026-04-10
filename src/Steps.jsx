import React from 'react';

function Steps() {
  return (
    /* --- Sección Informativa: Pasos a seguir --- */
    <section id="steps" className="steps-wrapper">
      <h2 className="steps-heading">¿Cómo funciona?</h2>
      
      {/* Area Interactiva: Contiene las tarjetas sobre un fondo decorativo */}
      <div className="steps-interactive-area">
        <div className="blue-bg-block"></div> {/* Bloque de color azul que sirve de fondo para las tarjetas */}
        
        {/* Rejilla de Pasos: Tres pasos fundamentales para usar la app */}
        <div className="steps-grid container">
          <div className="step-card">
            <div className="step-number" style={{background: '#dbeafe', color: '#1d4ed8'}}>1</div>
            <h3>Sube tu Foto</h3>
            <p className="step-text">Elige una foto clara de tu mascota o perro de interés desde tu galería o computadora.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number" style={{background: '#ffe4e6', color: '#e11d48'}}>2</div>
            <h3>Análisis IA</h3>
            <p className="step-text">Nuestra red neuronal procesa la imagen para detectar rasgos y patrones visuales.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number" style={{background: '#dcfce3', color: '#16a34a'}}>3</div>
            <h3>Resultados</h3>
            <p className="step-text">Obtén al instante un informe completo con la historia, niveles de energía y cuidados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
