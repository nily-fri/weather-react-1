import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "2dea068a350b4b6ca3dce230cd14e272";
  let longtitue = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitue}&&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
