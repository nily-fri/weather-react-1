import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row exact-conditions">
      <div className="col-4">
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            Humidity: <span>{props.data.humidity}</span>%
          </li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
          <li>
            Feels like <span>{Math.round(props.data.feelsLike)}</span>°
          </li>
        </ul>
      </div>
      <div className="col-4">
        <div className="big-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="today-temp">
          <span className="exact-temp">
            {" "}
            {Math.round(props.data.temperature)}°
          </span>
          <span className="degrees">
            <a href="/">C</a> |<a href="/">F</a>
          </span>
          <p>
            <strong>{Math.round(props.data.max)}°</strong> /{" "}
            {Math.round(props.data.min)}°
          </p>
        </div>
      </div>
    </div>
  );
}
