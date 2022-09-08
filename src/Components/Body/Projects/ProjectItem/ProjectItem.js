import React from "react";
import ProjectDescription from "./ProjectDescription";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <div className={classes["item-container"]}>
      <div className={classes["item-container--overflow"]}>
        <img className={classes["item-img"]} src={props.src} />
        <ProjectDescription />
      </div>
    </div>
  );
};

export default ProjectItem;
