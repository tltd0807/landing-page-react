import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <React.Fragment>
      <h2 className={classes.header}>Services</h2>
      <div className={classes["service-container"]}>
        <ServiceItem title="Graphic Design" price="400" />
        <ServiceItem title="Product Design" price="350" />
        <ServiceItem title="Web Design" price="800" />
        <ServiceItem title="Video Editing" price="500" />
      </div>
    </React.Fragment>
  );
};

export default Services;
