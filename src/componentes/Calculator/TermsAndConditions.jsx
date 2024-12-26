// components/TermsAndConditions.js
import React from "react";

const TermsAndConditions = ({ acceptedTerms, setAcceptedTerms, handleSendWhatsAppMessage }) => {
  return (
    <div className="terms-and-conditions">
      <input
        type="checkbox"
        checked={acceptedTerms}
        onChange={(e) => setAcceptedTerms(e.target.checked)}
      />
      <label>Acepto los términos y condiciones</label>
      <button onClick={handleSendWhatsAppMessage}>Enviar</button>
    </div>
  );
};

export default TermsAndConditions;
