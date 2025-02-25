import { useState } from "react";

const StorageConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("bit");
  const [toUnit, setToUnit] = useState("byte");
  const [convertedValue, setConvertedValue] = useState(null);

  const convert = () => {
    let value = parseFloat(inputValue);

    if (isNaN(value)) {
      setConvertedValue("Please enter a valid number.");
      return;
    }

    let result;

    if (fromUnit === "bit" && toUnit === "byte") {
      result = value / 8;
    } else if (fromUnit === "bit" && toUnit === "kb") {
      result = value / (8 * 1024);
    } else if (fromUnit === "bit" && toUnit === "mb") {
      result = value / (8 * 1024 * 1024);
    } else if (fromUnit === "bit" && toUnit === "gb") {
      result = value / (8 * 1024 * 1024 * 1024);
    } else if (fromUnit === "bit" && toUnit === "tb") {
      result = value / (8 * 1024 * 1024 * 1024 * 1024);
    } else if (fromUnit === "byte" && toUnit === "bit") {
      result = value * 8;
    } else if (fromUnit === "byte" && toUnit === "kb") {
      result = value / 1024;
    } else if (fromUnit === "byte" && toUnit === "mb") {
      result = value / (1024 * 1024);
    } else if (fromUnit === "byte" && toUnit === "gb") {
      result = value / (1024 * 1024 * 1024);
    } else if (fromUnit === "byte" && toUnit === "tb") {
      result = value / (1024 * 1024 * 1024 * 1024);
    } else if (fromUnit === "kb" && toUnit === "bit") {
      result = value * 8 * 1024;
    } else if (fromUnit === "kb" && toUnit === "byte") {
      result = value * 1024;
    } else if (fromUnit === "kb" && toUnit === "mb") {
      result = value / 1024;
    } else if (fromUnit === "kb" && toUnit === "gb") {
      result = value / (1024 * 1024);
    } else if (fromUnit === "kb" && toUnit === "tb") {
      result = value / (1024 * 1024 * 1024);
    } else if (fromUnit === "mb" && toUnit === "bit") {
      result = value * 8 * 1024 * 1024;
    } else if (fromUnit === "mb" && toUnit === "byte") {
      result = value * 1024 * 1024;
    } else if (fromUnit === "mb" && toUnit === "kb") {
      result = value * 1024;
    } else if (fromUnit === "mb" && toUnit === "gb") {
      result = value / 1024;
    } else if (fromUnit === "mb" && toUnit === "tb") {
      result = value / (1024 * 1024);
    } else if (fromUnit === "gb" && toUnit === "bit") {
      result = value * 8 * 1024 * 1024 * 1024;
    } else if (fromUnit === "gb" && toUnit === "byte") {
      result = value * 1024 * 1024 * 1024;
    } else if (fromUnit === "gb" && toUnit === "kb") {
      result = value * 1024 * 1024;
    } else if (fromUnit === "gb" && toUnit === "mb") {
      result = value * 1024;
    } else if (fromUnit === "gb" && toUnit === "tb") {
      result = value / 1024;
    } else if (fromUnit === "tb" && toUnit === "bit") {
      result = value * 8 * 1024 * 1024 * 1024 * 1024;
    } else if (fromUnit === "tb" && toUnit === "byte") {
      result = value * 1024 * 1024 * 1024 * 1024;
    } else if (fromUnit === "tb" && toUnit === "kb") {
      result = value * 1024 * 1024 * 1024;
    } else if (fromUnit === "tb" && toUnit === "mb") {
      result = value * 1024 * 1024;
    } else if (fromUnit === "tb" && toUnit === "gb") {
      result = value * 1024;
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
      style={{ backgroundColor: "#FADA7A", border: "3px solid #C14600" }}
    >
      <h2
        className="text-center rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#C14600", color: "#FADA7A" }}
      >
        Digital Storage Convertor
      </h2>

      <div
        className="d-flex flex-column m-2 p-3 rounded"
        style={{ backgroundColor: "#C14600", color: "#FADA7A" }}
      >
        <label className="my-2 text-white" htmlFor="">
          From :
        </label>
        <select
          className="mb-2 rounded fw-boldp-2"
          style={{ color: "#C14600" }}
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="bit">Bits</option>
          <option value="byte">Bytes</option>
          <option value="kb">Kilobyte</option>
          <option value="mb">Megabyte</option>
          <option value="gb">Gigabyte</option>
          <option value="tb">Terabyte</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          To :
        </label>
        <select
          className="mb-2 rounded fw-bold p-2"
          style={{ color: "#C14600" }}
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="byte">Bytes</option>
          <option value="bit">Bits</option>
          <option value="kb">Kilobyte</option>
          <option value="mb">Megabyte</option>
          <option value="gb">Gigabyte</option>
          <option value="tb">Terabyte</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          Value to convert:
        </label>
        <input
          className="mb-2 fw-bold rounded p-2 "
          style={{ color: "#C14600" }}
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
          style={{ backgroundColor: "#C14600", color: "#FADA7A" }}
          id="clear-btn"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#C14600", color: "#FADA7A" }}
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
          color: "#C14600",
          border: "2px solid #C14600",
        }}
      >
        <strong>Answer:</strong>{" "}
        {convertedValue !== null ? convertedValue : " "}
      </div>
    </div>
  );
};

export default StorageConverter;
