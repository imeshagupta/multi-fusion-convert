import { useState } from "react";

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("F");
  const [toUnit, setToUnit] = useState("C");
  const [convertedValue, setConvertedValue] = useState(null);

  const convert = () => {
    let value = parseFloat(inputValue);

    if (isNaN(value)) {
      setConvertedValue("Please enter a valid number.");
      return;
    }

    let result;
    if (fromUnit === "C" && toUnit === "F") {
      result = (value * 9) / 5 + 32;
    } else if (fromUnit === "C" && toUnit === "K") {
      result = value + 273.15;
    } else if (fromUnit === "F" && toUnit === "C") {
      result = ((value - 32) * 5) / 9;
    } else if (fromUnit === "F" && toUnit === "K") {
      result = ((value - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "K" && toUnit === "C") {
      result = value - 273.15;
    } else if (fromUnit === "K" && toUnit === "F") {
      result = ((value - 273.15) * 9) / 5 + 32;
    } else {
      result = value;
    }

    setConvertedValue(`${result.toFixed(2)} ${toUnit}`);
  };
  const clearText = () => {
    setInputValue("");
    setConvertedValue(null);
  };
  return (
    <div
      className="container rounded-4 p-4 my-2 d-flex flex-column "
      style={{ backgroundColor: "#EAEAEA", border: "2px solid #2D336B" }}
    >
      <h2
        className="text-center border border-dark border-2 rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#2D336B", color: "#EAEAEA" }}
      >
        Temperature Converter
      </h2>

      <div
        className="m-2 d-flex flex-column p-3 rounded-3"
        style={{ backgroundColor: "#2D336B" }}
      >
        <label className="my-2 text-white" htmlFor="">
          From :
        </label>
        <select
          style={{ color: "#2D336B" }}
          className="mb-2 fw-bold rounded border border-0 border-dark p-2"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="F">Fahrenheit(°F)</option>
          <option value="C">Celsius(°C)</option>
          <option value="K">Kelvin(K)</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          To :
        </label>
        <select
          style={{ color: "#2D336B" }}
          className="mb-2 fw-bold rounded border border-0 border-dark p-2"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="C">Celsius(°C)</option>
          <option value="F">Fahrenheit(°F)</option>
          <option value="K">Kelvin(K)</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          Value to convert :
        </label>
        <input
          style={{ color: "#2D336B" }}
          className="mb-2 fw-bold rounded border border-0 border-dark p-2"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="convertValue"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#2D336B", color: "#EAEAEA" }}
          id="clear-btn"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#2D336B", color: "#EAEAEA" }}
          id="convert-btn"
          onClick={convert}
        >
          Convert
        </button>
      </div>
      <div
        className="m-2 p-3 fs-5 rounded-3"
        id="answer"
        style={{
          backgroundColor: "white",
          border: "2px solid #2D336B",
          color: "#2D336B",
        }}
      >
        <strong>Answer:</strong>{" "}
        {convertedValue !== null ? convertedValue : " "}
      </div>
    </div>
  );
};

export default TemperatureConverter;
