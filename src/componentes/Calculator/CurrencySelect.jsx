// components/CurrencySelect.js
import React from "react";
import Select from "react-select";

const CurrencySelect = ({
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amountSend,
  setAmountSend,
  amountReceive,
  setAmountReceive,
}) => {
  const currencies = [
    { code: "PEN", label: "Soles Peruanos" },
    { code: "USD", label: "Dólares Estadounidenses" },
    { code: "BRL", label: "Reales Brasileños" },
  ];

  const currencyOptions = currencies.map((currency) => ({
    value: currency.code,
    label: currency.label,
  }));

  return (
    <div className="currency-select">
      <Select
        value={currencyOptions.find((option) => option.value === fromCurrency)}
        onChange={(selectedOption) => setFromCurrency(selectedOption.value)}
        options={currencyOptions}
      />
      <input
        type="number"
        value={amountSend}
        onChange={(e) => setAmountSend(e.target.value)}
        placeholder="Monto a enviar"
      />
      <Select
        value={currencyOptions.find((option) => option.value === toCurrency)}
        onChange={(selectedOption) => setToCurrency(selectedOption.value)}
        options={currencyOptions}
      />
      <input
        type="number"
        value={amountReceive}
        onChange={(e) => setAmountReceive(e.target.value)}
        placeholder="Monto a recibir"
      />
    </div>
  );
};

export default CurrencySelect;