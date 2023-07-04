import React, { useState, useEffect } from "react";
import { SetLocationList } from "./Config/locations";
import WeatherData from "./WeatherData";
import config from "./Config/config.json";

const WeatherHome = (props) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const {latitude,longitude,locations,setLocationData} = props;

  useEffect(() => {
     fetch(
      `${config.url}${props.latitude},${props.longitude}&days=5`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": config.apiKey,
          "X-RapidAPI-Host": config.apiHost,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if(!data){
          console.log("No data!");
          setWeatherData("");
          return null;
        }
        else
        {
          setWeatherData(data);
          setLocation(data.location.name);
        } 
      }).catch(ex=>console.log(ex));
  }, [latitude,longitude]);

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location === "") {
      setWeatherData("");
      return null;
    }
    fetch(config.url + location + "&days=5", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": config.apiKey,
        "X-RapidAPI-Host": config.apiHost,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newLocation = {lat:data.location.lat,lng:data.location.lon,name:data.location.name};
        SetLocationList(newLocation);
        setWeatherData(data);
        setLocationData([...locations,newLocation]);
      });
  };

  return (
    <>
      <div className="input-group mb-3 mx-auto" style={{ width: "30rem",position:'absolute',zIndex:2,marginTop:'1rem'}}>
        <div className="input-group-prepend">
          <span className="input-group-text">Place</span>
        </div>
        <input
          style={{width:'10rem'}}
          type="text"
          value={location}
          id="inputLocation"
          onChange={locationChangeHandler}
          onBlur={handleSubmit}
        />
      </div>
      <WeatherData location={weatherData} />
    </>
  );
};

export default WeatherHome;
