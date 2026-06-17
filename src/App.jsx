import { useState } from "react";
import "./App.css";

function App() {
const [amount, setAmount] = useState("");
const [rate, setRate] = useState("");
const [years, setYears] = useState("");

const [emi, setEmi] = useState(null);
const [interest, setInterest] = useState(null);
const [total, setTotal] = useState(null);

const calculateEMI = () => {
const P = parseFloat(amount);
const annualRate = parseFloat(rate);
const N = parseFloat(years) * 12;

if (!P || !annualRate || !N) {
  alert("Please fill all fields");
  return;
}

const R = annualRate / 12 / 100;

const emiValue =
  (P * R * Math.pow(1 + R, N)) /
  (Math.pow(1 + R, N) - 1);

const totalPayment = emiValue * N;
const totalInterest = totalPayment - P;

setEmi(emiValue.toFixed(2));
setTotal(totalPayment.toFixed(2));
setInterest(totalInterest.toFixed(2));


};

const resetForm = () => {
setAmount("");
setRate("");
setYears("");
setEmi(null);
setInterest(null);
setTotal(null);
};

return ( <div className="container"> <h1>💰 EMI Calculator</h1>

  <input
    type="number"
    placeholder="Loan Amount (₹)"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />

  <input
    type="number"
    placeholder="Interest Rate (%)"
    value={rate}
    onChange={(e) => setRate(e.target.value)}
  />

  <input
    type="number"
    placeholder="Loan Tenure (Years)"
    value={years}
    onChange={(e) => setYears(e.target.value)}
  />

  <button
    className="calculate-btn"
    onClick={calculateEMI}
  >
    Calculate EMI
  </button>

  <button
    className="calculate-btn"
    onClick={resetForm}
  >
    Reset
  </button>

  {emi && (
    <div className="result">
      <h2>📊 Results</h2>

      <p>
        <strong>Monthly EMI:</strong> ₹{emi}
      </p>

      <p>
        <strong>Total Interest:</strong> ₹{interest}
      </p>

      <p>
        <strong>Total Payment:</strong> ₹{total}
      </p>
    </div>
  )}

  <div className="footer">
    <p>
      <strong>Arti Ashok Kolhe</strong>
    </p>

    <p>kolhearti82@gmail.com</p>

    <a
      href="https://digitalheroesco.com"
      target="_blank"
      rel="noreferrer"
    >
      <button className="digital-btn">
        Built for Digital Heroes
      </button>
    </a>
  </div>
</div>

);
}

export default App;
