import React from 'react';

function Classifier({ 
  selectedImage, 
  setSelectedImage, 
  handleImageUpload, 
  handlePredict, 
  isPredicting, 
  result 
}) {
  return (
    /* --- Sección del Clasificador de Razas --- */
    <section id="ai" className="classifier-section container">
      {/* Contenedor Principal: Incluye el título y la zona de interacción */}
      <div className="classifier-box">
        <h2 className="classifier-heading">Centro de Clasificación</h2>
        
        {/* Lógica de Estados: Subida -> Predicción -> Resultado */}
        {!selectedImage ? (
          /* Estado 1: Solicitud de imagen */
          <div className="upload-inner" onClick={() => document.getElementById('fIn').click()}>
            <input type="file" id="fIn" hidden onChange={handleImageUpload} accept="image/*" />
            <div className="upload-icon">📸</div>
            <h3 className="upload-title">Toca aquí para seleccionar una imagen</h3>
            <p className="upload-subtitle">Investiga la raza de tu perro en segundos.</p>
          </div>
        ) : (
          <div className="result-flow">
            {!result && !isPredicting && (
              /* Estado 2: Imagen seleccionada, lista para procesar */
              <div className="prediction-preview">
                <img src={selectedImage} alt="Pre" className="preview-img" />
                <br />
                <button className="btn-dark btn-detect" onClick={handlePredict}>INICIAR DETECCIÓN</button>
                <p className="upload-again" onClick={() => setSelectedImage(null)}>Subir otra foto</p>
              </div>
            )}

            {isPredicting && (
              /* Estado 3: Procesando imagen con la IA */
              <div className="predicting-loader">
                <div className="loader-spinner"></div>
                <h3 className="loader-text">Procesando imagen con IA...</h3>
              </div>
            )}

            {result && (
              /* Estado 4: Resultados finales de la clasificación */
              <div className="result-grid-final">
                <div className="result-image-wrapper">
                  <img src={selectedImage} alt="Dog" className="result-img" />
                </div>
                <div className="result-details">
                  <div className="result-badge-group">
                    <div className="result-badge">Identificación Completa</div>
                    {/* Badge de Origen Mapamundi: Indica la procedencia de la raza */}
                    {result.origin && (
                      <div className="origin-badge">
                        <span className="origin-icon">🗺️</span>
                        <span className="origin-label">Origen:</span> {result.origin}
                      </div>
                    )}
                  </div>
                  <h2 className="result-title">{result.breed.replace(/_/g, ' ')}</h2>
                  <p className="result-history">{result.history}</p>
                  
                  {/* Cuadro de Datos Curiosos: Información adicional interesante */}
                  <div className="facts-box">
                    <h4 className="facts-title">💡 Datos Curiosos</h4>
                    <ul className="facts-list">
                      {result.facts && result.facts.map((fact, i) => <li key={i}>{fact}</li>)}
                    </ul>
                  </div>

                  <button className="btn-dark btn-reset" onClick={() => setSelectedImage(null)}>Analizar nuevo perro</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Classifier;
