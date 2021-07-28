import React, { useState } from "react";
import "./Weather.css";
import FixedDate from "./FixedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      iconUrl:
        "https://www.creativefabrica.com/wp-content/uploads/2020/04/21/sun-Icon-Vector-thin-line-Graphics-3920713-1-1-580x386.jpg",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather card-body">
        <h1>{weatherData.city}</h1>
        <h2>
          <FixedDate date={weatherData.date} />
        </h2>
        <div className="search-city">
          <form>
            <div>
              <input type="search" placeholder="Location" />
            </div>
            <div>
              <input
                type="image"
                src="https://static.thenounproject.com/png/197410-200.png"
                alt="submit"
                className="search-engine"
                width="20px"
              />
              <input
                type="image"
                src="https://www.iconpacks.net/icons/2/free-location-pin-icon-2964-thumb.png"
                alt="pin"
                width="20px"
                className="pin-icon"
              />
            </div>
          </form>
        </div>
        <div className="row exact-conditions">
          <div className="col-4">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li>
                Feels like <span>{Math.round(weatherData.feelsLike)}</span>°
              </li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              alt="sun-icon"
              className="big-icon"
            />
            <div className="today-temp">
              <span className="exact-temp">
                {" "}
                {Math.round(weatherData.temperature)}°
              </span>
              <span className="degrees">
                <a href="/">C</a> |<a href="/">F</a>
              </span>
              <p>
                <strong>{Math.round(weatherData.max)}°</strong> /{" "}
                {Math.round(weatherData.min)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2dea068a350b4b6ca3dce230cd14e272";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
