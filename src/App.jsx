import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Steps from './Steps';
import Classifier from './Classifier';
import NewsGrid from './NewsGrid';
import Footer from './Footer';

// Importación de activos visuales
import heroImg from './assets/cabito.png';
import cabitoFooterImg from './assets/cabito footer.png';
import utadeoLogo from './assets/logo utadeo.png';
import treatsLogoImg from './assets/logo treats.png';

function App() {
  // --- Estado Global de la Aplicación ---
  const [currentView, setCurrentView] = useState('home'); // Controla si vemos el home o noticias
  const [selectedImage, setSelectedImage] = useState(null); // Imagen cargada para clasificar
  const [isPredicting, setIsPredicting] = useState(false); // Estado de carga de la IA
  const [rawFile, setRawFile] = useState(null); // Archivo binario para enviar al backend
  const [result, setResult] = useState(null); // Respuesta de la clasificación
  const [news, setNews] = useState([]); // Datos del blog/noticias

  // Carga inicial de noticias desde el backend
  useEffect(() => {
    fetch('http://localhost:5000/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error cargando noticias:", err));
  }, []);

  // Manejo de la subida de imágenes desde el disco local
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRawFile(file);
      setSelectedImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  // Función para enviar la imagen al servidor y obtener la predicción de raza
  const handlePredict = async () => {
    if (!rawFile) return;
    setIsPredicting(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', rawFile);
      fetch(`${import.meta.env.VITE_API_URL}/predict`, {
  method: 'POST',
  body: formData,
});
      const data = await apiResponse.json();
      setResult(data);
    } catch (error) {
      alert("No se pudo conectar con el servidor de IA.");
    } finally {
      setIsPredicting(false);
    }
  };

  // Función para manejar el scroll suave y el cambio de vistas (SPA logic)
  const handleNavScroll = (view, targetId) => {
    setCurrentView(view);
    if (targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Navegación Estática Superior */}
      <Navbar 
        onNavScroll={handleNavScroll} 
        treatsLogoImg={treatsLogoImg} 
        utadeoLogo={utadeoLogo} 
      />

      {/* Contenedor de Vistas SPA con animación de desvanecimiento */}
      <div className="spa-view" key={currentView}>
        {currentView === 'home' ? (
          <>
            <Hero heroImg={heroImg} />
            <Steps />
            <Classifier 
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              handleImageUpload={handleImageUpload}
              handlePredict={handlePredict}
              isPredicting={isPredicting}
              result={result}
            />
          </>
        ) : (
          <NewsGrid news={news} />
        )}
      </div>

      {/* Pie de página con mascota decorativa */}
      <Footer cabitoFooterImg={cabitoFooterImg} />
    </div>
  );
}

export default App;
