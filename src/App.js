import React from "react";
import "./App.css";
import Project from "./Components/Body/Projects/Project";
import Services from "./Components/Body/Services/Services";
import Landing from "./Components/Header/Landing/Landing";
import Nav from "./Components/Header/Navigation/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Landing />
      <Project />
      <Services />
    </React.Fragment>
  );
}

export default App;
