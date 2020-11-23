import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PageHome from "./page-home.js";
import PageResult from "./page-result.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/resultado" component={PageResult}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
