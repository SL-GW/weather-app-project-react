import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input className="searchBox" type="text" placeholder="Enter city" />
        <input className="searchButton" type="submit" value="Search" />
      </form>
      <h1>Sheffield</h1>
      <ul>
        <li>Monday 16:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
            width="50px"
            alt="mostly cloudy icon"
          />
          21ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 52%</li>
            <li>Wind: 12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
