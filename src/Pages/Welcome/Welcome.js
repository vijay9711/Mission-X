import React, { Component } from "react";
import "./Welcome.css";
import $ from "jquery";
import Typed from "react-typed";
import Pic from "../../Assets/2.jpeg";

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
        <div className="Developer-intro">
          <label id="MyName" className=" m-0 p-0">
            Hi, I'm
          </label>

          <img src={Pic} alt="img" className="profile"></img>
          <br></br>
          <label className="Developer-name m-0 p-0">Vijay </label>
          <br></br>
          <Typed
            strings={["Software Developer", "web developer"]}
            className="typed-content"
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
