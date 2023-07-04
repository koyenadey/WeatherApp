import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div style={{position:'absolute',zIndex:2,height:'20vh',width:'20vw'}} className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
