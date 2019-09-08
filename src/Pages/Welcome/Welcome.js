import React, { Component } from "react";
import "./Welcome.css";
import $ from "jquery";

class Welcome extends Component {
  state = {};
  componentDidMount = () => {
    this.showName();
  };
  showName = event => {
    let name = $("#MyName").text();
    console.log("vijay", name);
  };
  render() {
    return (
      <div className="welcome">
        <p id="MyName" className="name">
          I'm Vijay
        </p>
      </div>
    );
  }
}

export default Welcome;
