import React from "react";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import "react-dropdown/style.css"
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LandmarkBtn(props) {
  return (
    <DropdownButton
      className="landmark-btn"
      drop="up"
      variant="danger"
      title={props.btn_text}
      id={props.id}
      key="up"
      onSelect={(selection) => props.onSelect(selection)}
    >
      <Dropdown.Item eventKey="0">{props.landmark_1}</Dropdown.Item>
      <Dropdown.Item eventKey="1">{props.landmark_2}</Dropdown.Item>
      <Dropdown.Item eventKey="2">{props.landmark_3}</Dropdown.Item>
    </DropdownButton>
  );
}

export default LandmarkBtn;
