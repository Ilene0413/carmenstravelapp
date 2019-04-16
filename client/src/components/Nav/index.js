import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Carmen's Travel App
      </Link>
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/books"
        className={window.location.pathname === "/" || window.location.pathname === "/books"
        ? "nav-link active" 
        : "nav-link"
        }
        >
        User Name
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/saved"
     className={window.location.pathname === "/saved"
     ? "nav-link active" 
     : "nav-link"
     }
     >
        Status
      </Link>
      </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;