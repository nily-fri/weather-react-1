import React from "react";
import "./Weather.css";
import Header from "./Header.js";
import Conditions from "./Conditions";
import Search from "./Search.js";

export default function Weather() {
  return (
    <div className="weather container ">
      <Header city="Tel Aviv" date="Tue, Apr 6" />
      <Search />
      <Conditions
        description="clear"
        precipitation="30"
        humidity="64"
        feelsLike="15"
        exactTemp="15"
        highTemp="20"
        lowTemp="14"
      />
    </div>
  );
}
