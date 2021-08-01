import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="forecast-temperatures">
            <span className="forecast-max"> 19° </span> /{" "}
            <span className="forecast-min">10°</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
