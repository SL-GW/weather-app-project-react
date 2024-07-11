import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon">☀️</div>
          <div className="forecastTemperatures">
            <span className="forecastTemperatureMax">20º</span>
            <span className="forecastTemperatureMin">15º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
