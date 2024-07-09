import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: "Tuesday 12:49",
    });

    setReady(true);
  }

  if (ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <img
              className="weatherIcon"
              src={weatherData.iconUrl}
              width="50px"
              alt={weatherData.description}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Feels like:{" "}
                <span className="weatherUnitDisplay">
                  {Math.round(weatherData.feels)}ºC
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span className="weatherUnitDisplay">
                  {weatherData.humidity}%
                </span>
              </li>
              <li>
                Wind:{" "}
                <span className="weatherUnitDisplay">
                  {Math.round(weatherData.wind)}km/h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
