import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img src="/images/redhat.jpg" alt="" style={{ width: 100, marginTop: -7 }} />
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
  );
}

export default Nav;