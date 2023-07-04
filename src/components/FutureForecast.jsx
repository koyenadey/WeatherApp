import React from "react";
import { getCurrentDate,getCurentDayName } from "./Config/helper";

const currentDate = getCurrentDate();

const FutureForecast = (props) => {
  const {futureData} = props;
  console.log(futureData);
  return (
      <div style={{position:'absolute',zIndex:2,marginTop:'4rem',height:'30vh',width:'100vw'}} className="form-control d-flex">
        {futureData.map((day) => (
          <div style={{height:'12vh',width:'50vw'}} className="d-flex flex-row bg-white">
            <div style={{border:'1px solid gray',width:'30vw'}} className="card p-1 flex-row bd-highlight">
              <img style={{height:'6vh',width:'3vw'}} src={day.day.condition.icon} alt={day.day.condition.text} />
              <p style={{marginRight:'1rem'}} className="w-15 text-left">{day.day.condition.text}</p>
              <p style={{marginRight:'1rem'}} className="w-15 text-left">{day.date === currentDate ? "Today" : getCurentDayName(day.date)}</p>
              <p style={{marginRight:'1rem'}} className="w-15 text-left">{day.day.maxtemp_c}</p>
              <p style={{marginRight:'1rem'}}>{day.day.mintemp_c}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FutureForecast;
