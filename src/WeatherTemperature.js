import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="exact-temp"> {Math.round(props.celsius)}</span>
        <span className="degrees">
          °C |
          <a href="/" onClick={convertToFah}>
            °F
          </a>
        </span>
        <p>
          <strong>{Math.round(props.max)}°</strong> / {Math.round(props.min)}°
        </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let max = (props.max * 9) / 5 + 32;
    let min = (props.min * 9) / 5 + 32;
    return (
      <div>
        <span className="exact-temp">{Math.round(fahrenheit)}</span>
        <span className="degrees">
          <a href="/" onClick={convertToCel}>
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
        <p>
          {Math.round(max)}°/ {Math.round(min)}°
        </p>
      </div>
    );
  }
}
