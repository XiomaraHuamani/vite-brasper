// components/ResultDisplay.js
import React from "react";

const ResultDisplay = ({ commission, commissionRateDisplay, tax, totalToSend, exchangeRate, errorMessage }) => {
  return (
    <div className="result-display">
      {errorMessage && <p>{errorMessage}</p>}
      <p>Comisión: {commissionRateDisplay}</p>
      <p>Impuestos: {tax}</p>
      <p>Total a Enviar: {totalToSend}</p>
      <p>Tipo de Cambio: {exchangeRate}</p>
    </div>
  );
};

export default ResultDisplay;