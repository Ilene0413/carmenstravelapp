import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

// ***** IF YOU WANT TO PUT GLOBE FROM CESIUM LOOK AT MAP COMPONENT

function ImgComp(props) {
  return (
    <div>
      <h1>IMAGE OR MAP/GLOBE Goes HERE.  Added Carmen Image for now</h1>
      <img src={props.image} alt={props.title} height="200"></img>
    </div>
  );
}

export default ImgComp;
