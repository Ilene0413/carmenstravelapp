import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./pages/Games";
import Signin from "./pages/Signin";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/games" component={Games} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;