import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h2 className={classes.header}>Contact</h2>
      <div className={classes["footer-info"]}>
        <div className={classes["footer-mail"]}>contact@website.com</div>
        <div className={`${classes["footer-number"]} ${classes.red}`}>
          +0 0000 0000
        </div>
      </div>
      <div className={classes["footer-social"]}>
        <div>Twitter</div>
        <div>LinkedIn</div>
        <div>Dribbble</div>
        <div>Youtube</div>
        <div>Instagram</div>
        <div>Facebook</div>
      </div>
      <footer className={classes["footer--end"]}>
        <div className={classes["footer--company"]}>2022 Creatives</div>
        <div className={classes["footer--moreInfo"]}>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
