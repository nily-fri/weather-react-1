import React from "react";
import "./Weather.css";

export default function Conditions(props) {
  return (
    <div>
      <div className="row exact-conditions">
        <div className="col-6">
          <ul>
            <li>{props.description} </li>
            <li>
              {" "}
              Precipitation <span>{props.precipitation}</span>%{" "}
            </li>
            <li>
              Humidity: <span> {props.humidity}</span>%
            </li>
            <li>
              Feels like <span>{props.feelsLike}</span>°
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/04/21/sun-Icon-Vector-thin-line-Graphics-3920713-1-1-580x386.jpg"
            alt="sun-icon"
            className="big-icon"
          />
          <div className="today-temp">
            <span className="exact-temp"> {props.exactTemp}°</span>
            <span className="degrees">
              <a href="/">C</a> |<a href="/">F</a>
            </span>
            <p>
              <strong>{props.highTemp}°</strong> / {props.lowTemp}°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
