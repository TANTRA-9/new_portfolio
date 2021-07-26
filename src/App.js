import React, { Component } from "react";
import Home from "./Components/Home/index";
import Projects from "./Components/Projects/index";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
