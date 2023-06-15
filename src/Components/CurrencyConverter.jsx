import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const exchangeRate = 82.16;

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
    setAmount("");
  };

  const currentDate = "15.06.2023";

  return (
    <div className='bg-body-secondary p-4 rounded-top-3 shadow-sm' >
      <h1 className='bg-info bg-gradient text-center fs-4 pb-1 rounded-top-3 mb-0'>
        Currency Converter
      </h1>
      <p className='text-center bg-secondary bg-gradient rounded-bottom-3 text-light'>
        Dollar to INR
      </p>
      <div className='vstack gap-2 pe-5 ps-5 pt-3 shadow-lg rounded-2 position-relative'>
        <input
          className='form-control'
          type="text"
          name="number"
          id="number"
          value={amount}
          autoComplete='off' onChange={handleChangeAmount} />
        <button className='btn btn-outline-danger align-self-center shadow-sm' onClick={convertCurrency}>
          Calculate
        </button>
        <p className='mb-1'>
          Exchange rate: 1 USD = ₹ {exchangeRate}
        </p>
        <p className='mb-1'>
          Exchanged value in: ₹ {convertedAmount ? convertedAmount : 0}
        </p>
        <h6 className='align-self-end display-6 fs-6'>on {currentDate}</h6>
      </div>
    </div>
  );
};

export default CurrencyConverter;