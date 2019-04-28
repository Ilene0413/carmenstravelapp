import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Container } from "../Grid";

function Nav(props) {
  return (
    <Container fluid>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img src="/images/carmensandiego.jpeg" alt="" style={{ width: 200, marginTop: -4 }} />
        Carmen's Travel App
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            User Name: {props.user_name}
          </li>
          <li className="nav-item">
            Wins:  {props.wins}
          </li>
        </ul>{props.children}
      </div>
    </nav>
    </Container>
  );
}
export default Nav;