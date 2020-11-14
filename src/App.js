import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Results from "./components/Results";
import About from "./components/About"
const App = () => {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/result" component={Results} />
              <Route exact path="/about" component={About} />
            </Switch>
        </Router>
      </div>
    )
}

export default App;