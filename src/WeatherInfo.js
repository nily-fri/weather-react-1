import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature
            celsius={props.data.temperature}
            max={props.data.max}
            min={props.data.min}
          />
        </div>
      </div>
    </div>
  );
}
