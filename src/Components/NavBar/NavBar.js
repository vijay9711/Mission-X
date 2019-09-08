import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  state = {};
  render() {
    // snow strom package is there
    return (
      <div>
        <div className="container px-2">
          <button className="linkButton">HOME</button>
          <button className="linkButton">ARTICLES</button>
          <button className="linkButton">PORTFOLIO</button>
          <button className="linkButton">ABOUT</button>
          <button className="linkButton">CONTACT</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
