import React, { useState, useEffect } from "react";

import CurrencyRow from "../../components/currencyrow";

import "./styles.css";

const API_KEY = "188981ba909ccbb6a1d014017e6aea03";
const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`;

const Home = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(true);

  let baseAmount, targetAmount;
  if (baseCurrencyAmount) {
    baseAmount = amount;
    targetAmount = amount * exchangeRate;
  } else {
    baseAmount = amount / exchangeRate;
    targetAmount = amount;
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions(Object.keys(data.rates));
        setBaseCurrency(data.base);
        setTargetCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (baseCurrency != null && targetCurrency != null) {
      fetch(`${URL}&base=${baseCurrency}&symbol=${targetCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[targetCurrency]));
    }
  }, [baseCurrency, targetCurrency]);

  const handleBaseAmountChange = (e) => {
    setAmount(e.target.value);
    setBaseCurrencyAmount(true);
  };

  const handleTargetAmountChange = (e) => {
    setAmount(e.target.value);
    setBaseCurrencyAmount(false);
  };

  return (
    <div className="home-container">
      <div className="main">
        <h1>Converti Valute </h1>
        <p>Strumento per convertire le valute, nei principali cambi</p>
        <div className="text-container">
          <h5 className="text-1">Inserisci importo</h5>
          <h5 className="text-2">Seleziona valute</h5>
        </div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={baseCurrency}
          onChangeCurrency={(e) => setBaseCurrency(e.target.value)}
          onChangeAmount={handleBaseAmountChange}
          amount={baseAmount}
        />
        <br />
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={targetCurrency}
          onChangeCurrency={(e) => setTargetCurrency(e.target.value)}
          onChangeAmount={handleTargetAmountChange}
          amount={targetAmount}
        />
      </div>
    </div>
  );
};

export default Home;
