import React from "react";
import Alert from "react-bootstrap/Alert"
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function StatusAlert(props) {
  return (
    <Alert className="status-alert" color={props.color}>
      {props.isVisible && <span>
          {props.text} Click <a href="/" className="alert-link">HERE</a> to play again.
      </span>}
    </Alert>
  );
}

export default StatusAlert;