import React, { Fragment } from "react";

import classes from "./Project.module.css";
import img1 from "../../../Image/Rectangle1.png";
import img2 from "../../../Image/Rectangle2.png";
import img3 from "../../../Image/Rectangle3.png";
import img4 from "../../../Image/Rectangle4.png";
import img5 from "../../../Image/Rectangle5.png";
import img6 from "../../../Image/Rectangle6.png";
import ProjectItem from "./ProjectItem/ProjectItem";
const Project = () => {
  const array = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <div className={classes.header}>Work</div>
      <div className={classes["project-container"]}>
        <ProjectItem src={img1} />
        <ProjectItem src={img2} />
        <ProjectItem src={img4} />
        <ProjectItem src={img3} />
        <ProjectItem src={img6} />
        <ProjectItem src={img5} />
      </div>
    </div>
  );
};

export default Project;
