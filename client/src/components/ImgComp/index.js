import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

// ***** IF YOU WANT TO PUT GLOBE FROM CESIUM LOOK AT MAP COMPONENT

function ImgComp(props) {
  return (
    <div>
      <img className="img-comp" src={props.image} alt={props.title}></img>
    </div>
  );
}

export default ImgComp;
