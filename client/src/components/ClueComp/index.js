import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ClueComp(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title>Clue from Witness</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
  );
}

export default ClueComp;




