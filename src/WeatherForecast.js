import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon"> </div>
          <div className="forecastTemperatures">
            <span className="forecastTemperatureMax">20º</span>
            <span className="forecastTemperatureMin">15º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
