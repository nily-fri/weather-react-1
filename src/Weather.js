import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather card-body">
      <h1>Tel Aviv</h1>
      <h2>Sat, Jul 10</h2>
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
            <li>Clear</li>
            <li>
              {" "}
              Precipitation <span>30</span>%{" "}
            </li>
            <li>
              Humidity: <span>30</span>%
            </li>
            <li>
              Feels like <span>29</span>°
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/04/21/sun-Icon-Vector-thin-line-Graphics-3920713-1-1-580x386.jpg"
            alt="sun-icon"
            className="big-icon"
          />
          <div className="today-temp">
            <span className="exact-temp"> 30°</span>
            <span className="degrees">
              <a href="/">C</a> |<a href="/">F</a>
            </span>
            <p>
              <strong>31°</strong> / 15°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
