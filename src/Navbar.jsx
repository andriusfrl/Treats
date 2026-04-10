import React from 'react';

function Navbar({ onNavScroll, treatsLogoImg, utadeoLogo }) {
  return (
    /* --- Barra de Navegación Principal --- */
    <nav className="nav-container">
      {/* Grupo de Identidad: Logos de la aplicación y universidad */}
      <div className="logo-group">
        <div className="treats-brand">
          <img src={treatsLogoImg} alt="Treats Icon" className="treats-logo-icon" />
          <div className="logo">TREATS</div>
        </div>
        <div className="logo-divider"></div>
        <img src={utadeoLogo} alt="Utadeo" className="utadeo-logo" />
      </div>

      {/* Menú de Enlaces: Controla la navegación SPA */}
      <div className="nav-group">
        <div className="nav-links">
          <a href="#hero" onClick={(e) => { e.preventDefault(); onNavScroll('home', 'hero'); }}>Inicio</a>
          <a href="#steps" onClick={(e) => { e.preventDefault(); onNavScroll('home', 'steps'); }}>Cómo funciona</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavScroll('news'); }}>Noticias</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
