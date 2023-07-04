import React, { useState, useEffect } from "react";
import WeatherHome from "./components/WeatherHome";
import {GetLocations} from "../src/components/Config/locations";
import "./App.css";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locations,setLocation] = useState(GetLocations());


  useEffect(() => {

      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
      
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBrkLpntNSGNhV3wO_j6XCYYPu9gJrH8lY",
  });

  if (!isLoaded) return <p>Loading...</p>;

  const handleMarkerClicked = (location) =>{
    setLatitude(location.lat);
    setLongitude(location.lng);
  }


  return (
    <div
      style={{
        margin: "auto",
        height: "70vh",
        width: "100vw",
        border: "1px solid gray",
        zIndex: 1,
      }}
    >
      <GoogleMap
        center={{lat:0,lng:0}}
        zoom={2.8}
        mapContainerStyle={{ width: "100vw", height: "70vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={()=>handleMarkerClicked(location)}
            animation={window.google.maps.Animation.DROP}
          />
        ))}
      </GoogleMap>
        <div style={{height:'30vh',width:'100vw',border:'1px solid black'}}>
        <WeatherHome latitude={latitude} longitude={longitude} locations={locations} setLocationData={setLocation}
        style={{ position: "absolute", zIndex: 2, border: "1px solid black" }}
      />
      </div>
    </div>
  );
}

export default App;
