import React from "react";
import "./App.css";
import Landing from "./Components/Header/Landing/Landing";
import Nav from "./Components/Header/Navigation/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Landing />
    </React.Fragment>
  );
}

export default App;
