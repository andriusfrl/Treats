import React from 'react';

function Footer({ cabitoFooterImg }) {
  return (
    /* --- Pie de Página: Incluye el personaje decorativo de la app --- */
    <footer className="footer-cabito">
      {/* Imagen de Cabito: Personaje que se asoma desde la parte inferior de la pantalla */}
      <img src={cabitoFooterImg} alt="Cabito peering out" className="cabito-footer-img" />
    </footer>
  );
}

export default Footer;
