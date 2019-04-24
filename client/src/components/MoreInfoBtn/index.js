import React from "react";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MoreInfoBtn(props) {
  return (
    <OverlayTrigger
      trigger="click"
      key="right"
      placement="right"
      overlay={
        <Popover
          id={props.id}
          title={props.title}
        
        >
          
          {props.text.map((poi, index) => (
            <a href={poi.link} target="_blank">{poi.name}</a>
           
            
          ))}
          
          
        </Popover>
      }
    >
      <Button className="more-info-btn"> 
         {props.btn_text}</Button>
    </OverlayTrigger>
  );
}

export default MoreInfoBtn;

