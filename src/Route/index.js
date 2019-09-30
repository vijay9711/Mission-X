import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../Pages/Welcome/Welcome.js";
import Home from "../Pages/Home/Home.js";
import Blog from "../Pages/Blog/Blog.js";
class RoutePage extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} exact />
          <Route path="/blog" component={Blog} exact />
        </Switch>
      </Router>
    );
  }
}

export default RoutePage;
