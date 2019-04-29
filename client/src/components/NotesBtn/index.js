import React from "react";
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


function NotesBtn(props) {
  return (
    <OverlayTrigger
      trigger="click"
      key="right"
      variant="info"
      placement="right"
      overlay={
        <Popover
          id={props.id}
          title="Reviews"
          
        >
          {props.text.map((review, index) => (

            <p>"{review.note}" - {review.author}</p>
          ))}
          
        </Popover>
      }
    >
    <Button variant="info" className="notes-btn" onClick = {() => props.onClick()}>  
         {props.btn_text}</Button>
    </OverlayTrigger>
  );
}

export default NotesBtn;

