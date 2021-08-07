import React, { useState } from "react";
import "./Weather.css";
import FixedDate from "./FixedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "2dea068a350b4b6ca3dce230cd14e272";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather card-body">
        <h1>{weatherData.city}</h1>
        <h2>
          <FixedDate date={weatherData.date} />
        </h2>
        <div className="search-city">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="search"
                placeholder="Location"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div>
              <i className="fas fa-search search-engine" />
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
