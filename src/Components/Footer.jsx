import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer ">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-logo">TPSUSHI</span>
          <span className="footer-tagline">Sushi &amp; fraîcheur</span>
        </div>
        <div className="footer-meta">
          <span>© 2025 TPSushi. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
