import React from "react";
import "./App.css";
import Route from "./Route/index.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Particles from "react-particles-js";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Particles
        style={{ position: "fixed", zIndex: "-1" }}
        params={{
          particles: {
            number: {
              value: 80
            },
            size: {
              value: 1
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              }
            }
          }
        }}
      />
      <Route />
    </React.Fragment>
  );
}

export default App;
