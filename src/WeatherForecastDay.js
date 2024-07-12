import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecastDay">{day()}</div>
      <div>
        <img
          className="forecastIcon"
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon_url}
        />
      </div>
      <div className="forecastTemperatures">
        <span className="forecastTemperatureMax">
          {Math.round(props.data.temperature.maximum)}º
        </span>
        <span className="forecastTemperatureMin">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>{" "}
    </div>
  );
}
