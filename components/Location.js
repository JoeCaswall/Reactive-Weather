import React from "react";
import WeatherCard from "./WeatherCard";

function Location({ city }) {
  return <WeatherCard data={city} />;
}

export default Location;
