import React, { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("London");
  const currentCity = cities.find(({ city }) => city === location);

  return (
    <div className="app-container">
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <Location city={currentCity} />
      </div>
      <div className="app">
        {cities.map((city) => (
          <WeatherCard key={city.id} data={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
