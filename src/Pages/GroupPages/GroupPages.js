import React, { Component } from "react";
import Welcome from "../Welcome/Welcome.js";
import Home from "../Home/Home.js";
import Bolg from "../Blog/Blog.js";
class GroupingPages extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Home />
        <Bolg />
      </React.Fragment>
    );
  }
}

export default GroupingPages;
