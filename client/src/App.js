import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    wins: 0
  };


render() {
    return (
      <Wrapper score={this.state.wins}>
      <Router>
        <div>
     <Nav />
     </div>
     </Router>
     </Wrapper>
    );
  }

}
export default App;
