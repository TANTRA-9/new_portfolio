import React, { Component } from "react";
import Home from "./Components/Home/index";
import Apmah from "./Components/Projects/Apmah";
import StayFit from "./Components/Projects/StayFit";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/apmah" component={Apmah} />
          <Route exact path="/projects/stay_fit" component={StayFit} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
