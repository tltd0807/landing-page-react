import React from "react";
import classes from "./ProjectDescription.module.css";

const ProjectDescription = () => {
  return (
    <div className={classes["description-container"]}>
      <div className={classes["description-title"]}>Abstract Design</div>
      <div className={classes["description-content"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <div className={classes["description-nav"]}>
        See Project <span className={classes.arrow}>&#x2192;</span>
      </div>
    </div>
  );
};

export default ProjectDescription;
