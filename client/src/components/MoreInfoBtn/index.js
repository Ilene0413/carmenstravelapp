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
          href={props.href}
          
        >
          <strong>{props.text}</strong>
        </Popover>
      }
    >
      <Button className="more-info-btn" 
        variant="secondary"
        data-toggle="popover"
         data-html="true"> 
         {props.btn_text}</Button>
    </OverlayTrigger>
  );
}

export default MoreInfoBtn;

