import { useState } from "react";

const EnergyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("J");
  const [toUnit, setToUnit] = useState("KJ");
  const [convertedValue, setConvertedValue] = useState(null);

  const convert = () => {
    let value = parseFloat(inputValue);

    if (isNaN(value)) {
      setConvertedValue("Please enter a valid number.");
      return;
    }
    let result;
    if (fromUnit === "J" && toUnit === "KJ") {
      result = value / 1000;
    } else if (fromUnit === "J" && toUnit === "KC") {
      result = value / 4184;
    } else if (fromUnit === "J" && toUnit === "GC") {
      result = value / 4.184;
    } else if (fromUnit === "J" && toUnit === "Wh") {
      result = value / 3600;
    } else if (fromUnit === "J" && toUnit === "Kwh") {
      result = value / 3600000;
    } else if (fromUnit === "J" && toUnit === "BT") {
      result = value / 1055;
    } else if (fromUnit === "J" && toUnit === "UT") {
      result = value / 105500000;
    } else if (fromUnit === "J" && toUnit === "ftp") {
      result = value / 1.356;
    } else if (fromUnit === "KJ" && toUnit === "J") {
      result = value * 1000;
    } else if (fromUnit === "KJ" && toUnit === "KC") {
      result = value * 4.184;
    } else if (fromUnit === "KJ" && toUnit === "GC") {
      result = value * 239;
    } else if (fromUnit === "KJ" && toUnit === "Wh") {
      result = value / 3.6;
    } else if (fromUnit === "KJ" && toUnit === "Kwh") {
      result = value / 3600;
    } else if (fromUnit === "KJ" && toUnit === "BT") {
      result = value / 1.055;
    } else if (fromUnit === "KJ" && toUnit === "UT") {
      result = value / 105500;
    } else if (fromUnit === "KJ" && toUnit === "ftp") {
      result = value * 737.6;
    } else if (fromUnit === "GC" && toUnit === "J") {
      result = value * 4.184;
    } else if (fromUnit === "GC" && toUnit === "KJ") {
      result = value / 239;
    } else if (fromUnit === "GC" && toUnit === "KC") {
      result = value / 1000;
    } else if (fromUnit === "GC" && toUnit === "Wh") {
      result = value / 860.4;
    } else if (fromUnit === "GC" && toUnit === "Kwh") {
      result = value / 860400;
    } else if (fromUnit === "GC" && toUnit === "BT") {
      result = value / 252.2;
    } else if (fromUnit === "GC" && toUnit === "UT") {
      result = value / 25210000;
    } else if (fromUnit === "GC" && toUnit === "ftp") {
      result = value * 3.086;
    } else if (fromUnit === "Wh" && toUnit === "J") {
      result = value * 3600;
    } else if (fromUnit === "Wh" && toUnit === "KJ") {
      result = value * 3.6;
    } else if (fromUnit === "Wh" && toUnit === "KC") {
      result = value / 1.162;
    } else if (fromUnit === "Wh" && toUnit === "GC") {
      result = value * 860.4;
    } else if (fromUnit === "Wh" && toUnit === "Kwh") {
      result = value / 1000;
    } else if (fromUnit === "Wh" && toUnit === "BT") {
      result = value * 3.412;
    } else if (fromUnit === "Wh" && toUnit === "UT") {
      result = value / 29300;
    } else if (fromUnit === "Wh" && toUnit === "ftp") {
      result = value * 2655;
    } else if (fromUnit === "Kwh" && toUnit === "J") {
      result = value * 3600000;
    } else if (fromUnit === "Kwh" && toUnit === "KJ") {
      result = value * 3600;
    } else if (fromUnit === "Kwh" && toUnit === "KC") {
      result = value * 860.4;
    } else if (fromUnit === "Kwh" && toUnit === "GC") {
      result = value * 860400;
    } else if (fromUnit === "Kwh" && toUnit === "Wh") {
      result = value * 1000;
    } else if (fromUnit === "Kwh" && toUnit === "BT") {
      result = value * 3412;
    } else if (fromUnit === "Kwh" && toUnit === "UT") {
      result = value / 29.3;
    } else if (fromUnit === "Kwh" && toUnit === "ftp") {
      result = value * 2655000;
    } else if (fromUnit === "BT" && toUnit === "J") {
      result = value * 1055;
    } else if (fromUnit === "BT" && toUnit === "KJ") {
      result = value * 1.055;
    } else if (fromUnit === "BT" && toUnit === "KC") {
      result = value / 3.966;
    } else if (fromUnit === "BT" && toUnit === "GC") {
      result = value * 252.2;
    } else if (fromUnit === "BT" && toUnit === "Wh") {
      result = value / 3.412;
    } else if (fromUnit === "BT" && toUnit === "Kwh") {
      result = value / 3412;
    } else if (fromUnit === "BT" && toUnit === "UT") {
      result = value / 99980;
    } else if (fromUnit === "BT" && toUnit === "ftp") {
      result = value * 778.2;
    } else if (fromUnit === "UT" && toUnit === "J") {
      result = value * 105500000;
    } else if (fromUnit === "UT" && toUnit === "KJ") {
      result = value * 105500;
    } else if (fromUnit === "UT" && toUnit === "KC") {
      result = value * 25210;
    } else if (fromUnit === "UT" && toUnit === "GC") {
      result = value * 25210000;
    } else if (fromUnit === "UT" && toUnit === "Wh") {
      result = value * 29300;
    } else if (fromUnit === "UT" && toUnit === "Kwh") {
      result = value * 29.3;
    } else if (fromUnit === "UT" && toUnit === "BT") {
      result = value * 99980;
    } else if (fromUnit === "UT" && toUnit === "ftp") {
      result = value * 77800000;
    } else if (fromUnit === "ftp" && toUnit === "J") {
      result = value * 1.356;
    } else if (fromUnit === "ftp" && toUnit === "KJ") {
      result = value / 737.6;
    } else if (fromUnit === "ftp" && toUnit === "KC") {
      result = value / 3086;
    } else if (fromUnit === "ftp" && toUnit === "GC") {
      result = value / 3.086;
    } else if (fromUnit === "ftp" && toUnit === "Wh") {
      result = value / 2655;
    } else if (fromUnit === "ftp" && toUnit === "Kwh") {
      result = value / 2655000;
    } else if (fromUnit === "ftp" && toUnit === "BT") {
      result = value / 778.2;
    } else if (fromUnit === "ftp" && toUnit === "UT") {
      result = value * 77800000;
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
      style={{
        backgroundColor: "rgb(240, 188, 234)",
        border: "3px solid #4B164C",
      }}
    >
      <h2
        className="text-center border border-white border-2 rounded-3 m-2 p-3 fw-bold my-2"
        style={{ backgroundColor: "#4B164C", color: "#F8E7F6" }}
      >
        Energy Converter
      </h2>

      <div
        className="d-flex border border-white border-2 rounded-3 m-2 p-3 flex-column mx-2"
        style={{ backgroundColor: "#4B164C" }}
      >
        <label className="my-2 text-white" htmlFor="">
          From :
        </label>
        <select
          className="mb-2 rounded border border-0 border-dark p-2 fw-bold"
          style={{ color: "#4B164C" }}
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="J">Joule(J)</option>
          <option value="KJ">KiloJoule(KJ)</option>
          <option value="KC">KiloCalorie</option>
          <option value="GC">Gram Calorie(GC)</option>
          <option value="Wh">Watt Hour</option>
          <option value="Kwh">Kilowatt Hour</option>
          <option value="BT">British Thermal Unit</option>
          <option value="UT">Us Thermal Unit</option>
          <option value="ftp">Foot Pound</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          To :
        </label>
        <select
          className="mb-2 fw-bold rounded border border-0 border-dark p-2"
          style={{ color: "#4B164C" }}
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="KJ">KiloJoule(KJ)</option>
          <option value="J">Joule(J)</option>
          <option value="KC">KiloCalorie</option>
          <option value="GC">Gram Calorie(GC)</option>
          <option value="Wh">Watt Hour</option>
          <option value="Kwh">Kilowatt Hour</option>
          <option value="BT">British Thermal Unit</option>
          <option value="UT">Us Thermal Unit</option>
          <option value="ftp">Foot Pound</option>
        </select>

        <label className="my-2 text-white" htmlFor="">
          Value to convert:
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
          type="button"
          className="btn m-2  px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#4B164C", color: "#F8E7F6" }}
          id="clear-btn"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          className="btn m-2 px-4 fs-5 fw-bold"
          style={{ backgroundColor: "#4B164C", color: "#F8E7F6" }}
          type="button"
          onClick={convert}
        >
          Convert
        </button>
      </div>
      <div
        className="m-2 p-3 fs-5 rounded-3"
        style={{
          backgroundColor: "white",
          color: "#4B164C",
          border: "2px solid #4B164C",
        }}
        id="answer"
      >
        <strong>Answer:</strong>{" "}
        {convertedValue !== null ? convertedValue : " "}
      </div>
    </div>
  );
};

export default EnergyConverter;
