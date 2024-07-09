import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <img
            className="weatherIcon"
            src={props.data.iconUrl}
            width="50px"
            alt={props.data.description}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels like:{" "}
              <span className="weatherUnitDisplay">
                {Math.round(props.data.feels)}ºC
              </span>
            </li>
            <li>
              Humidity:{" "}
              <span className="weatherUnitDisplay">{props.data.humidity}%</span>
            </li>
            <li>
              Wind:{" "}
              <span className="weatherUnitDisplay">
                {Math.round(props.data.wind)}km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
