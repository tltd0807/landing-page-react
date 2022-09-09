import classes from "./ServiceItem.module.css";

const ServiceItem = (props) => {
  return (
    <div className={classes["serviceItem-container"]}>
      <div className={classes["serviceItem-title"]}>{props.title}</div>
      <div className={classes["serviceItem-content"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <div className={classes["serviceItem-nav"]}>
        See Project <span className={classes.arrow}>&#x2192;</span>
      </div>
      <div className={classes["serviceItem-price"]}>
        Starting at ${props.price}
      </div>
    </div>
  );
};
export default ServiceItem;
