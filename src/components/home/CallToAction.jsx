// CallToAction.jsx
import React from "react";


const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>¿Que si somos la mejor opción?</h2>
        <h1>Somos la mejor opción, escógenos</h1>
      </div>
      <div className="cta-actions">
        <button className="cta-button">
          Infórmate Más <span>→</span>
        </button>
        <div className="cta-contact">
          <p>Llámanos</p>
          <a href="tel:+51966991933">+51 966991933</a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
