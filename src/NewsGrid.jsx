import React from 'react';

function NewsGrid({ news }) {
  const dogImages = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
  ];

  const externalLinks = [
    "https://www.akc.org/expert-advice/news/",
    "https://www.srperro.com/blog",
    "https://elpais.com/noticias/perros/"
  ];

  const fullNews = [...news, 
    { id: 4, title: "Los secretos del Corgi de la realeza", badge: "Noticia", date: "5 abr 2026", summary: "", link: "https://www.akc.org/dog-breeds/pembroke-welsh-corgi/" },
    { id: 5, title: "Entrenamiento Positivo Avanzado: Guía 2026", badge: "Blog", date: "1 abr 2026", summary: "", link: "https://www.youtube.com/watch?v=kRkG1Qx9fQo", isYoutube: true },
    { id: 6, title: "Cómo prevenir resfriados caninos de temporada", badge: "Tips", date: "22 mar 2026", summary: "", link: "https://elpais.com/sociedad/2022-11-23/como-proteger-a-los-perros-del-frio-y-de-los-resfriados.html" }
  ];

  return (
    /* --- Sección de Noticias y Blog (Vista SPA) --- */
    <div key="grid" className="news-page-wrapper container">
      {/* Encabezado de la Sección: Título dinámico con barra de acento */}
      <div className="news-header">
         <div className="news-accent-bar"></div>
         <h1 className="news-main-title">Noticias y Actualizaciones</h1>
      </div>

      {/* Cuadrícula de Noticias: Tarjetas que enlazan a contenido externo */}
      <div className="news-grid">
         {fullNews.map((item, i) => (
           <div key={item.id || i} className="news-card" onClick={() => window.open(item.link || externalLinks[i % externalLinks.length], '_blank')}>
              {/* Contenido Visual: Imagen y badges de categoría/YouTube */}
              <div className="news-card-media">
                <img src={dogImages[i % dogImages.length]} alt="Dog" />
                <div className="news-card-badge">{item.badge}</div>
                {item.isYoutube && <div className="news-card-yt">▶ YouTube</div>}
              </div>

              {/* Contenido Informativo: Título y fecha de publicación */}
              <div className="news-card-content">
                <h3>{item.title}</h3>
                <p>{item.date || "12 mar 2026"}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

export default NewsGrid;
