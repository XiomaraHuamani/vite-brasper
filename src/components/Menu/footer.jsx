import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img
            src="/assets/images/logos/logo_blanco.png"
            alt="Brasper Transferencias"
            className="footer-logo"
          />
          <p>
            Brasper es una empresa especializada en servicios de cambio de
            divisas, enfocada principalmente en la conversión de reales
            brasileños a soles peruanos y viceversa, así como en el intercambio
            de dólares estadounidenses.
          </p>
          <a href="#info" className="footer-link">
            Infórmate Más →
          </a>
        </div>

        <div className="footer-links-section">
          <div>
            <h3>Servicios</h3>
            <ul>
              <li>Transferencias</li>
              <li>Cotización</li>
              <li>Divisas</li>
              <li>Asesoría</li>
              <li>Fidelización</li>
            </ul>
          </div>
        </div>
        <div className="footer-links-section">
          <h3>¿Quiénes somos?</h3>
          <ul>
            <li>Misión</li>
            <li>Visión</li>
          </ul>
        </div>
        <div className="footer-contact-section">
          <h3>Contáctanos</h3>
          <p>Puedes escribirnos al siguiente correo, te ayudaremos con gusto</p>
          <a href="mailto:brasper@braspertransferencias.com">
            brasper@braspertransferencias.com
          </a>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Brasper. Reservados todos los derechos.</p>
        <a href="#reclamaciones">📖 Libro de reclamaciones</a>
      </div>{" "}
    </footer>
  );
};

export default Footer;
