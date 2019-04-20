import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Signin from "./pages/Signin";
import Game from "./pages/Game";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Nav />
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/game" component={Game} />
        </Wrapper>
      </div>
    </Router>

  );
}


export default App;
