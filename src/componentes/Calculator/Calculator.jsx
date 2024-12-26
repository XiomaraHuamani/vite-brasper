// components/Calculator.js
import React, { useState, useEffect } from "react";
import CurrencySelect from "./CurrencySelect";
import ResultDisplay from "./ResultDisplay";
import TermsAndConditions from "./TermsAndConditions";

const Calculator = () => {
  const [amountSend, setAmountSend] = useState("");
  const [amountReceive, setAmountReceive] = useState("");
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [commission, setCommission] = useState(0);
  const [commissionRateDisplay, setCommissionRateDisplay] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToSend, setTotalToSend] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [exchangeRates, setExchangeRates] = useState({});
  const [commissionRates, setCommissionRates] = useState({});

  useEffect(() => {
    fetchExchangeRates();
    fetchCommissionRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch("https://api.brasper.site/api/v1/coin/exchange-rates/");
      const data = await response.json();
      const formattedRates = {};
      data.forEach((rate) => {
        const baseCurrency = rate.base_currency === 1 ? "PEN" : rate.base_currency === 2 ? "BRL" : "USD";
        const targetCurrency = rate.target_currency === 1 ? "PEN" : rate.target_currency === 2 ? "BRL" : "USD";
        formattedRates[`${baseCurrency}-${targetCurrency}`] = rate.rate;
      });
      setExchangeRates(formattedRates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      setErrorMessage("Error al cargar las tasas de cambio.");
    }
  };

  const fetchCommissionRates = async () => {
    try {
      const response = await fetch("https://api.brasper.site/api/v1/coin/commissions/");
      const data = await response.json();
      const formattedCommissionRates = {};
      data.forEach((commission) => {
        const baseCurrency = commission.base_currency === 1 ? "PEN" : commission.base_currency === 2 ? "BRL" : "USD";
        const targetCurrency = commission.target_currency === 1 ? "PEN" : commission.target_currency === 2 ? "BRL" : "USD";
        const key = `${baseCurrency}-${targetCurrency}`;
        if (!formattedCommissionRates[key]) {
          formattedCommissionRates[key] = [];
        }
        formattedCommissionRates[key].push({
          min: parseFloat(commission.range_details.min_amount),
          max: parseFloat(commission.range_details.max_amount),
          rate: commission.commission_percentage / 100,
        });
      });
      setCommissionRates(formattedCommissionRates);
    } catch (error) {
      console.error("Error fetching commission rates:", error);
    }
  };

  return (
    <div className="calculator-container">
      <h5>Calculadora</h5>
      <CurrencySelect
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        amountSend={amountSend}
        setAmountSend={setAmountSend}
        amountReceive={amountReceive}
        setAmountReceive={setAmountReceive}
      />
      <ResultDisplay
        commission={commission}
        commissionRateDisplay={commissionRateDisplay}
        tax={tax}
        totalToSend={totalToSend}
        exchangeRate={exchangeRate}
        errorMessage={errorMessage}
      />
      <TermsAndConditions
        acceptedTerms={acceptedTerms}
        setAcceptedTerms={setAcceptedTerms}
        handleSendWhatsAppMessage={() => alert("Enviar mensaje")}
      />
    </div>
  );
};

export default Calculator;
