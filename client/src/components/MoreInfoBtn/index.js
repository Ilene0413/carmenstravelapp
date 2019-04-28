import React from "react";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MoreInfoBtn(props) {
  return (
    <OverlayTrigger
      trigger="click"
      variant="info"
      key="right"
      placement="right"
      overlay={
        <Popover
          id={props.id}
          title="Other Landmarks"
        
        >
          
          {props.text.map((poi, index) => (
            <a className="more-info-link" href={poi.link} target="_blank" rel="noopener noreferrer">{poi.name}</a>
           
            
          ))}
          
          
        </Popover>
      }
    >
      <Button variant="info" className="more-info-btn" onClick = {() => props.onClick()}> 
         {props.btn_text}</Button>
    </OverlayTrigger>
  );
}

export default MoreInfoBtn;

