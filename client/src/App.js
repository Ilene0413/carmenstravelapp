import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./pages/Games";


class App extends Component {
  state = {
    login: null
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Games {...props} login={this.state.login} />} />
            <Route exact path="/games" render={(props) => <Games {...props} login={this.state.login} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(App);
