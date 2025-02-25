import React, { useState } from "react";

const SimpleInterestConverter = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [display, setDisplay] = useState("");

  const calculateInterest = () => {
    let p = parseFloat(principal);
    let r = parseFloat(rate);
    let t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
      setDisplay("Please enter valid values");
      return;
    }

    let result = (p * r * t) / 100;
    setDisplay(`₹${result.toFixed(2)}`);
  };

  const restart = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setDisplay("");
  };
  return (
    <div
      className="container rounded-4 p-4 my-2 d-flex flex-column "
      style={{ backgroundColor: "#F7A8C4", border: "3px solid #AC1754" }}
    >
      <h1
        className="text-center rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#AC1754", color: "white" }}
      >
        Simple Interest Calculator
      </h1>

      <div
        className="d-flex flex-column m-2 p-3 rounded-3"
        style={{ backgroundColor: "#AC1754" }}
      >
        <label className="my-2 text-white" htmlFor="principal">
          Enter Principal value
        </label>
        <input
          style={{ color: "#2D336B" }}
          className="mb-2 rounded border border-0 border-dark p-2"
          type="number"
          min="1"
          value={principal}
          onChange={(e) => {
            setPrincipal(e.target.value);
          }}
          id="principal"
          placeholder="Enter the value"
        />

        <label className="my-2 text-white" htmlFor="rate">
          Enter Rate (in %)
        </label>

        <input
          style={{ color: "#2D336B" }}
          className="mb-2 rounded border border-0 border-dark p-2"
          type="number"
          min="1"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
          }}
          id="rate"
          placeholder="Enter the value"
        />

        <label className="my-2 text-white" htmlFor="time">
          Enter time (in years)
        </label>

        <input
          style={{ color: "#2D336B" }}
          className="mb-2 rounded border border-0 border-dark p-2"
          type="number"
          min="1"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          id="time"
          placeholder="Enter the value"
        />
      </div>
      <div className="d-flex m-2 justify-content-center">
        <button
          className="btn mx-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#AC1754", color: "white" }}
          onClick={calculateInterest}
        >
          Calculate
        </button>
        <button
          className="btn px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#AC1754", color: "white" }}
          onClick={restart}
        >
          Clear
        </button>
      </div>
      <div className="text-center">
        <label
          className="mx-2 fs-5 fw-bold"
          htmlFor="result"
          style={{ color: "#AC1754" }}
        >
          Calculated Value:
        </label>

        <input
          className="rounded
        m-2 p-3 fs-5 w-50"
          style={{
            backgroundColor: "white",
            border: "2px solid #AC1754",
            color: "#2D336B",
          }}
          type="text"
          value={display}
          readOnly
          onChange={(e) => {
            setDisplay(e.target.value);
          }}
          id="display"
        />
      </div>
    </div>
  );
};

export default SimpleInterestConverter;
