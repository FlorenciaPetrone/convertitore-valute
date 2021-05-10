import React, { useState, useEffect } from "react";
import { getExchangeRate } from "../../utils/services";

import CurrencyRow from "../../components/currencyrow";
import { currencies } from "../../utils/currencies";

import "./styles.css";

//Fixer.io API
//const API_KEY = "188981ba909ccbb6a1d014017e6aea03";
//const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`;

//New API /www.currencyconverterapi.com/
const BASE_URL = `https://free.currconv.com/api/v7/convert`;
const API_KEY = "ab9c0de4732a870847c6";

const Home = () => {
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
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
    async function changeValute() {
      const currencyExchange = `${baseCurrency}_${targetCurrency}`;
      const url = `${BASE_URL}?q=${currencyExchange}&compact=ultra&apiKey=${API_KEY}`;
      const data = await getExchangeRate(url);
      setExchangeRate(data[currencyExchange]);
    }
    changeValute();
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
          currencyOptions={currencies}
          selectedCurrency={baseCurrency}
          onChangeCurrency={(e) => setBaseCurrency(e.target.value)}
          onChangeAmount={handleBaseAmountChange}
          amount={baseAmount}
        />
        <br />
        <CurrencyRow
          currencyOptions={currencies}
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
