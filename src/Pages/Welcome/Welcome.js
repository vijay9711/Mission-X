import React, { Component } from "react";
import "./Welcome.css";
import $ from "jquery";
import Typed from "react-typed";

class Welcome extends Component {
  state = {};
  componentDidMount = () => {
    this.showName();
  };
  showName = event => {
    let name = $("#MyName").text();
    console.log("vijay", name);
    // $(".kayo-work").typed({
    //   strings: ["Web Developer.", "Web Designer.", "Software developer"],
    //   cursorChar: "",
    //   typeSpeed: 100,
    //   loop: true,
    //   backSpeed: 50
    // });
  };
  render() {
    return (
      <div className="welcome">
        <div className="Developer-intro">
          <p id="MyName" className=" m-0 p-0">
            Hi, I'm
          </p>
          <p className="Developer-name m-0 p-0">Vijay</p>
          <Typed
            strings={["Software Developer", "web developer"]}
            className="typed-content"
            typeSpeed={70}
            backSpeed={30}
            loop
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
