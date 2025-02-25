import { useState } from "react";

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Km");
  const [toUnit, setToUnit] = useState("M");
  const [convertedValue, setConvertedValue] = useState(null);

  const convert = () => {
    let value = parseFloat(inputValue);

    if (isNaN(value)) {
      setConvertedValue("Please enter a valid number.");
      return;
    }
    let result;

    if (fromUnit === "Km" && toUnit === "M") {
      result = value * 1000 + " m";
    } else if (fromUnit === "M" && toUnit === "Km") {
      result = value / 1000 + " Km";
    } else if (fromUnit === "Km" && toUnit === "Cm") {
      result = value * 100000 + " cm";
    } else if (fromUnit === "Cm" && toUnit === "Km") {
      result = value / 100000 + " Km";
    } else if (fromUnit === "Km" && toUnit === "Mm") {
      result = value * 1000000 + " mm";
    } else if (fromUnit === "Mm" && toUnit === "Km") {
      result = value / 1000000 + " Km";
    } else if (fromUnit === "M" && toUnit === "Cm") {
      result = value * 100 + " cm";
    } else if (fromUnit === "Cm" && toUnit === "M") {
      result = value / 100 + " m";
    } else if (fromUnit === "Mile" && toUnit === "Km") {
      result = value * 1.609 + " Km";
    } else if (fromUnit === "Km" && toUnit === "Mile") {
      result = value / 1.609 + " mile";
    } else if (fromUnit === "ft" && toUnit === "Km") {
      result = value / 3281 + " Km";
    } else if (fromUnit === "Km" && toUnit === "ft") {
      result = value * 3281 + " ft";
    } else if (fromUnit === "Km" && toUnit === "in") {
      result = value * 39370 + " inches";
    } else if (fromUnit === "Km" && toUnit === "ft") {
      result = value * 3281 + " ft";
    } else if (fromUnit === "in" && toUnit === "Km") {
      result = value / 39370 + " Km";
    } else if (fromUnit === "in" && toUnit === "ft") {
      result = value / 12 + " ft";
    } else if (fromUnit === "ft" && toUnit === "in") {
      result = value * 12 + " inches";
    } else if (fromUnit === "M" && toUnit === "Mm") {
      result = value * 1000 + " mm";
    } else if (fromUnit === "Mm" && toUnit === "M") {
      result = value / 1000 + " m";
    } else if (fromUnit === "M" && toUnit === "Mile") {
      result = value / 1609 + " mile";
    } else if (fromUnit === "Mile" && toUnit === "M") {
      result = value * 1609 + " m";
    } else if (fromUnit === "M" && toUnit === "in") {
      result = value * 39.37 + " inches";
    } else if (fromUnit === "in" && toUnit === "M") {
      result = value / 39.37 + " m";
    } else if (fromUnit === "M" && toUnit === "ft") {
      result = value * 3.281 + " ft";
    } else if (fromUnit === "ft" && toUnit === "M") {
      result = value / 3.281 + " m";
    } else if (fromUnit === "Cm" && toUnit === "Mm") {
      result = value * 10 + " mm";
    } else if (fromUnit === "Mm" && toUnit === "Cm") {
      result = value / 10 + " cm";
    } else if (fromUnit === "Cm" && toUnit === "Mile") {
      result = value / 160900 + " mile";
    } else if (fromUnit === "Mile" && toUnit === "Cm") {
      result = value * 160900 + " cm";
    } else if (fromUnit === "Cm" && toUnit === "in") {
      result = value / 2.54 + " inches";
    } else if (fromUnit === "in" && toUnit === "Cm") {
      result = value * 2.54 + " cm";
    } else if (fromUnit === "Cm" && toUnit === "ft") {
      result = value / 30.48 + " ft";
    } else if (fromUnit === "ft" && toUnit === "Cm") {
      result = value * 30.48 + " cm";
    } else if (fromUnit === "Mile" && toUnit === "ft") {
      result = value * 5280 + " ft";
    } else if (fromUnit === "ft" && toUnit === "Mile") {
      result = value / 5280 + " mile";
    } else if (fromUnit === "Mm" && toUnit === "ft") {
      result = value / 304.8 + " ft";
    } else if (fromUnit === "ft" && toUnit === "Mm") {
      result = value * 304.8 + " mm";
    } else if (fromUnit === "Mm" && toUnit === "in") {
      result = value / 25.4 + " inches";
    } else if (fromUnit === "in" && toUnit === "Mm") {
      result = value * 25.4 + " mm";
    } else if (fromUnit === "Mm" && toUnit === "Mile") {
      result = value / 1609000 + " mile";
    } else if (fromUnit === "Mile" && toUnit === "Mm") {
      result = value * 1609000 + " mm";
    } else if (fromUnit === "Mile" && toUnit === "in") {
      result = value * 63360 + " inches";
    } else if (fromUnit === "in" && toUnit === "Mile") {
      result = value / 63360 + " mile";
    } else {
      result = value;
    }

    setConvertedValue(result);
  };
  const clearText = () => {
    setInputValue("");
    setConvertedValue(null);
  };
  return (
    <div
      className="container rounded-4 p-4 my-2 d-flex flex-column "
      style={{ backgroundColor: "#E07A5F", border: "2px solid #690B22" }}
    >
      <h2
        className="text-center border border-danger-subtle border-2 rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#690B22", color: "rgb(248, 182, 164)" }}
      >
        Length Convertor
      </h2>

      <div
        className="d-flex flex-column m-2 p-3 rounded-3"
        style={{ backgroundColor: "#690B22" }}
      >
        <label className="my-2 text-white" htmlFor="">
          From :
        </label>
        <select
          className="mb-2 rounded fw-bold  p-2"
          style={{ color: "#690B22" }}
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="Km">Kilometer(Km)</option>
          <option value="M">Meter(M)</option>
          <option value="Cm">Centimeter(Cm)</option>
          <option value="Mm">Millimeter(Mm)</option>
          <option value="Mile">Mile</option>
          <option value="in">Inch(in)</option>
          <option value="ft">Foot(ft)</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          To :
        </label>
        <select
          className="mb-2 rounded fw-bold  p-2"
          style={{ color: "#690B22" }}
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="M">Meter(M)</option>
          <option value="Km">Kilometer(Km)</option>
          <option value="Cm">Centimeter(Cm)</option>
          <option value="Mm">Millimeter(Mm)</option>
          <option value="Mile">Mile</option>
          <option value="in">Inch(in)</option>
          <option value="ft">Foot(ft)</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          Value to convert :
        </label>
        <input
          type="text"
          className="mb-2 rounded border border-0 border-dark
        p-2"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="convertValue"
        />
      </div>
      <div className="d-flex m-2 justify-content-center">
        <button
          className="btn m-2  px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#690B22", color: "rgb(248, 182, 164)" }}
          id="clear-btn"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#690B22", color: "rgb(248, 182, 164)" }}
          id="convert-btn"
          onClick={convert}
        >
          Convert
        </button>
      </div>
      <div
        className="m-2 p-3 fs-5 rounded-3"
        style={{
          backgroundColor: "white",
          color: "#690B22",
          border: "2px solid #690B22",
        }}
        id="answer"
      >
        <strong>Answer:</strong>{" "}
        {convertedValue !== null ? convertedValue : " "}
      </div>
    </div>
  );
};

export default LengthConverter;
