import React from "react";
import "./App.css";
import Route from "./Route/index.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Particles from "react-particles-js";
import SideBar from "./Components/SideBar/SideBar.js";
import GroupingPage from "./Pages/GroupPages/GroupPages.js";
function App() {
  return (
    <React.Fragment>
      <SideBar class="sideBar" />
      <NavBar class="navBar" />
      <Particles
        style={{ position: "fixed", zIndex: "-1", marginTop: "-50px" }}
        params={{
          particles: {
            number: {
              value: 70
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
      {/* <Route /> */}
      <GroupingPage />
    </React.Fragment>
  );
}

export default App;
