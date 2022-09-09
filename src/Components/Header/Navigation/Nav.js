import React, { useState } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  const [mobileMenuIsClick, setMobileMenuIsClick] = useState(false);
  const onClickHandler = () => {
    setMobileMenuIsClick(true);
  };
  const onCloseHandler = () => {
    setMobileMenuIsClick(false);
  };
  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-logo"]}>logo</div>

      <div className={classes["nav-list"]}>
        <div className={classes["nav-item"]}>Work</div>
        <div className={classes["nav-item"]}>services</div>
        <div className={classes["nav-item"]}>contact</div>
      </div>
      <div className={classes.menu}>
        <div
          tabIndex={0}
          className={classes["menu-icon"]}
          onClick={onClickHandler}
          onBlur={onCloseHandler}
        >
          |||
        </div>
        {mobileMenuIsClick && (
          <div className={classes["menu-list"]}>
            <div className={classes["menu-item"]}>Work</div>
            <div className={classes["menu-item"]}>services</div>
            <div className={classes["menu-item"]}>contact</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
