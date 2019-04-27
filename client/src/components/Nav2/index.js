import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav2(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img className="pull-left" id="logo" src="/images/carmensandiego.jpeg" alt="" style={{ width: 200, marginTop: -4 }} />
        Carmen's Travel App
      </Link>
      <div>
      
      </div>
    </nav>
  );
}

export default Nav2;