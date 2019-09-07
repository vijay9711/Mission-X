import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './Route/index.js'
import NavBar from "./Components/NavBar/NavBar.js"
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route />
    </React.Fragment>
  );
}

export default App;
