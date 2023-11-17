import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/partlyCloudy.svg";

function WeatherCard({ data }) {
  function cityForecast(city) {
    return city.forecast == "Sunny"
      ? sunny
      : city.forecast == "Cloudy"
      ? cloudy
      : city.forecast == "Partly cloudy"
      ? partlyCloudy
      : city.forecast == "Rainy"
      ? rainy
      : city.forecast == "Snowy"
      ? cloudy
      : "";
  }

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={cityForecast(data)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
