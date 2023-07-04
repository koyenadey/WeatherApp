import React from "react";
import { getCurrentDateTime } from "./Config/helper";

const currentDateTime = getCurrentDateTime();
//console.log(currentDateTime);
const CurrentForecast = (props) => {
  const {foreCastData,currentLocData} = props;
  return (
    <>
      <div style={{height:'5vh',width:'15vw',marginLeft:'15rem',marginTop:'0.8rem',position:'absolute',zIndex:2}}>
        <p style={{padding:'0',marginLeft:'0rem',width:'10vw',position:'absolute',zIndex:2}}>{currentLocData.city}</p>
        <p style={{padding:'0',marginTop:'1rem',marginLeft:'0rem',width:'10vw',position:'absolute',zIndex:2,overflowWrap:'break-word'}}>{currentLocData.condition}</p>
        <p style={{padding:'0',marginLeft:'8rem',width:'10vw',position:'absolute',zIndex:2}}>High: {currentLocData.high}</p>
        <p style={{padding:'0',marginTop:'1rem',marginLeft:'8rem',width:'10vw',position:'absolute',zIndex:2}}>Low: {currentLocData.low}</p>
      </div>
      <h6 className="form-control mt-3 text-center">Current Forecast</h6>
      <div className="d-flex flex-row card mt-2">
        {foreCastData.map((h) => (
          <div className="card p-1 bd-highlight" key={h.time_epoch}>
            <p>
              {h.time === currentDateTime.split(" ")[1].split(":")[0]
                ? "Now"
                : h.time.split(" ")[1].split(":")[0] > 12
                ? h.time.split(" ")[1].split(":")[0].substring(0) + " PM"
                : h.time.split(" ")[1].split(":")[0].substring(0) + " AM"}
            </p>
            <img src={h.condition.icon} alt={h.condition.text} />
            <p>{h.temp_c}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentForecast;
