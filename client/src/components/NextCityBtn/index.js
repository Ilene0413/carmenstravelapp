import React from "react";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import "react-dropdown/style.css"
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function NextCityBtn(props) {
  return (
    <DropdownButton
      className="next-city-btn"
      drop="up"
      variant="danger"
      title={props.btn_text}
      id={props.id}
      key="up"
      onSelect={(selection) => props.onSelect(selection)}
    >
      <Dropdown.Item eventKey={props.city_1}>{props.city_1}</Dropdown.Item>
      <Dropdown.Item eventKey={props.city_2}>{props.city_2}</Dropdown.Item>
      <Dropdown.Item eventKey={props.city_3}>{props.city_3}</Dropdown.Item> 
      <Dropdown.Item eventKey={props.city_4}>{props.city_4}</Dropdown.Item>      
    </DropdownButton>
  );
}

export default NextCityBtn;