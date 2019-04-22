import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ClueComp(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {<Card.Img className="card-img" variant="top" src={props.cardimage} />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
  );
}

export default ClueComp;






