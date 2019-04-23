import React, { Component } from "react";
import "./Signin.css";





class Signin extends Component {
  render() {
    return (
      <div className="signin" style={{backgroundImage: "url(./images/carmenbackground.jpg)"}} >
      
      <button id="start" type="submit" variant="danger" size="lg"> Start </button>
      </div>
    );
  }
}
  


export default Signin;
