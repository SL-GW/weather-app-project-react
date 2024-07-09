import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form">
        <input
          className="searchBox"
          type="text"
          placeholder="Enter city"
          autoFocus="on"
        />
        <input className="searchButton" type="submit" value="Search" />
      </form>
      <h1>Sheffield</h1>
      <ul>
        <li>Monday 16:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <img
            className="weatherIcon"
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
            width="50px"
            alt="mostly cloudy icon"
          />
          <span className="temperature">21</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation: <span className="weatherUnitDisplay">5%</span>
            </li>
            <li>
              Humidity: <span className="weatherUnitDisplay">52%</span>
            </li>
            <li>
              Wind: <span className="weatherUnitDisplay">12km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
