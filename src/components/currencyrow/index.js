//React
import React from "react";
//Styles
import "./styles.css";

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) => {
  return (
    <div className="import-container">
      <input
        type="number"
        value={amount}
        placeholder="Inserisci importo"
        className="input"
        onChange={onChangeAmount}
      />
      <select
        className="select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
