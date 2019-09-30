import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  state = {};
  render() {
    // snow strom package is there
    return (
      <div className="container">
        <button className="linkButton">
          <a href="#home">HOME</a>
        </button>
        <button className="linkButton">
          <a href="#blog">ARTICLES</a>
        </button>
        <button className="linkButton">PORTFOLIO</button>
        <button className="linkButton">ABOUT</button>
        <button className="linkButton">CONTACT</button>
      </div>
    );
  }
}

export default NavBar;
