import React, { useState } from "react";
import CurrentForecast from "./CurrentForecast";
import FutureForecast from "./FutureForecast";

const WeatherData = ({ location }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFutureData = (event) => {
    event.preventDefault();
    setIsVisible((prev) => !prev);
  };

  if (location) {
    const city = location.location.name;
    const temperature = location.current.condition.temp_c;
    const condition = location.current.condition.text;
    const high = location.forecast.forecastday[0].day.maxtemp_c;
    const low = location.forecast.forecastday[0].day.mintemp_c;
    const hour = location.forecast.forecastday[0].hour;
    const forecastData = location.forecast.forecastday;
    const currentLocationData = {
      city,
      temperature,
      condition,
      high,
      low
    }
    //console.log("Curr Loc",currentLocationData);
    return (
      <>
        <a
          href="#"
          onClick={handleFutureData}
          style={{
            position: "absolute",
            zIndex: 2,
            marginTop: "1.3rem",
            marginLeft: "90%",
            textDecoration: "none",
          }}
        >
          {isVisible ? "Current" : "Future"} Forecast
        </a>
        {!isVisible && <CurrentForecast foreCastData={hour} currentLocData = {currentLocationData} />}
        {isVisible && <FutureForecast futureData={forecastData} />}
      </>
    );
  }
};

export default WeatherData;
