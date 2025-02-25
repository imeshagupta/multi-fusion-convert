import { useState } from "react";

const TimeConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("min");
  const [toUnit, setToUnit] = useState("hr");
  const [convertedValue, setConvertedValue] = useState(null);

  const convert = () => {
    let value = parseFloat(inputValue);

    if (isNaN(value)) {
      setConvertedValue("Please enter a valid number.");
      return;
    }

    let result;

    if (fromUnit === "min" && toUnit === "hr") {
      result = value / 60;
    } else if (fromUnit === "min" && toUnit === "day") {
      result = value / 1440;
    } else if (fromUnit === "min" && toUnit === "week") {
      result = value / 10080;
    } else if (fromUnit === "min" && toUnit === "mon") {
      result = value / 43800;
    } else if (fromUnit === "min" && toUnit === "yr") {
      result = value / 525600;
    } else if (fromUnit === "hr" && toUnit === "min") {
      result = value * 60;
    } else if (fromUnit === "hr" && toUnit === "day") {
      result = value * 24;
    } else if (fromUnit === "hr" && toUnit === "week") {
      result = value * 168;
    } else if (fromUnit === "hr" && toUnit === "mon") {
      result = value / 730;
    } else if (fromUnit === "hr" && toUnit === "yr") {
      result = value / 8760;
    } else if (fromUnit === "day" && toUnit === "min") {
      result = value * 1440;
    } else if (fromUnit === "day" && toUnit === "hr") {
      result = value * 24;
    } else if (fromUnit === "day" && toUnit === "week") {
      result = value / 7;
    } else if (fromUnit === "day" && toUnit === "mon") {
      result = value / 30.417;
    } else if (fromUnit === "day" && toUnit === "yr") {
      result = value / 365;
    } else if (fromUnit === "week" && toUnit === "min") {
      result = value * 10080;
    } else if (fromUnit === "week" && toUnit === "hr") {
      result = value * 168;
    } else if (fromUnit === "week" && toUnit === "day") {
      result = value * 7;
    } else if (fromUnit === "week" && toUnit === "mon") {
      result = value / 4.345;
    } else if (fromUnit === "week" && toUnit === "yr") {
      result = value / 52.143;
    } else if (fromUnit === "mon" && toUnit === "min") {
      result = value * 43800;
    } else if (fromUnit === "mon" && toUnit === "hr") {
      result = value * 730;
    } else if (fromUnit === "mon" && toUnit === "day") {
      result = value * 30.417;
    } else if (fromUnit === "mon" && toUnit === "week") {
      result = value * 4.345;
    } else if (fromUnit === "mon" && toUnit === "yr") {
      result = value / 12;
    } else if (fromUnit === "yr" && toUnit === "min") {
      result = value * 525600;
    } else if (fromUnit === "yr" && toUnit === "hr") {
      result = value * 8760;
    } else if (fromUnit === "yr" && toUnit === "day") {
      result = value * 365;
    } else if (fromUnit === "yr" && toUnit === "week") {
      result = value * 52.143;
    } else if (fromUnit === "yr" && toUnit === "mon") {
      result = value * 12;
    } else {
      result = value;
    }

    setConvertedValue(`${result.toFixed(2)} ${toUnit}`);
  };

  const clear = () => {
    setInputValue("");
    setConvertedValue(null);
  };

  return (
    <div
      className="container rounded-4 p-4 my-2 d-flex flex-column "
      style={{
        backgroundColor: "rgb(192, 242, 106)",
        border: "3px solid #123524",
      }}
    >
      <h2
        className="text-center border border-dark border-2 rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#123524", color: "rgb(192, 242, 106)" }}
      >
        Time Convertor
      </h2>

      <div
        className="d-flex flex-column m-2 p-3"
        style={{ backgroundColor: "#123524", color: "rgb(192, 242, 106)" }}
      >
        <label className="my-2 text-white" htmlFor="">
          From :
        </label>
        <select
          className="mb-2 fw-bold  rounded p-2"
          style={{ color: "#123524" }}
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="min">Minute</option>
          <option value="hr">Hour</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="mon">Month</option>
          <option value="yr">Year</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          To :
        </label>
        <select
          className="mb-2 fw-bold  rounded p-2"
          style={{ color: "#123524" }}
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="hr">Hour</option>
          <option value="min">Minute</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="mon">Month</option>
          <option value="yr">Year</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          Value to convert :
        </label>
        <input
          type="text"
          className="mb-2 fw-bold  rounded p-2"
          style={{ color: "#123524" }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="convertValue"
        />
      </div>
      <div className="d-flex m-2 justify-content-center">
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#123524", color: "rgb(192, 242, 106)" }}
          id="clear-btn"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#123524", color: "rgb(192, 242, 106)" }}
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
          color: "#123524",
          border: "2px solid #123524",
        }}
      >
        <strong>Answer:</strong>{" "}
        {convertedValue !== null ? convertedValue : " "}
      </div>
    </div>
  );
};

export default TimeConverter;
