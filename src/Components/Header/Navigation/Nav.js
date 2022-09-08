import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-logo"]}>logo</div>
      <div className={classes["nav-list"]}>
        <div className={classes["nav-item"]}>Work</div>
        <div className={classes["nav-item"]}>services</div>
        <div className={classes["nav-item"]}>contact</div>
      </div>
    </nav>
  );
};

export default Nav;
