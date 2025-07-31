import { useState } from "react";

export function EMICalculator() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(1);
  const [rate, setRate] = useState(10.45);
  const [emi, setEmi] = useState(0);
  const [toggleResult, setToggleResult] = useState('d-none');

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleYearsChange(e) {
    setYears(e.target.value);
  }

  function handleRateChange(e) {
    setRate(e.target.value);
  }

  function handleCalculateClick() {
    var P = parseInt(amount);
    var N = parseInt(years) * 12;
    var R = parseFloat(rate) / 12 / 100;
    var EMI = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);
    setToggleResult('d-block');
  }

  return (
    <div className="container-fluid">
      <div className="p-4 border border-2 mt-4">
        <h4 className="text-center">Personal Loan EMI Calculator</h4>

        <div className="row my-4">
          <div className="col">
            Amount you need ₹ <input onChange={handleAmountChange} type="text" value={amount} size="10" />
          </div>
          <div className="col">
            for <input type="text" onChange={handleYearsChange} size="2" value={years} /> years
          </div>
          <div className="col">
            interest rate <input onChange={handleRateChange} type="text" size="4" value={rate} /> %
          </div>
        </div>

        <div className="my-4 row">
          <div className="col">
            <input type="range" onChange={handleAmountChange} value={amount} className="form-range" step="10000" min="100000" max="1000000" />
            <div>
              <span>₹ 1,00,000/-</span>
              <span className="float-end">₹ 10,00,000/-</span>
            </div>
          </div>
          <div className="col">
            <input type="range" onChange={handleYearsChange} value={years} className="form-range" min="1" max="5" />
            <div>
              <span>1 Year</span>
              <span className="float-end">5 Years</span>
            </div>
          </div>
          <div className="col">
            <input type="range" onChange={handleRateChange} value={rate} className="form-range" step="0.01" min="10.45" max="18.45" />
            <div>
              <span>10.45%</span>
              <span className="float-end">18.45%</span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col text-end">
            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
          </div>
        </div>

        <div className={`row mt-5 ${toggleResult}`}>
          <div className="col">
            <div className="text-center fs-4">
              Your EMI amount is <span className="fw-bold">
                {emi.toLocaleString('en-in', {
                  style: 'currency',
                  currency: 'INR',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span> for next {years * 12} months.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}