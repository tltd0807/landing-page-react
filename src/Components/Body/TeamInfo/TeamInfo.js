import React, { useState } from "react";

import classes from "./TeamInfo.module.css";

const TeamInfo = () => {
  //onMouseEnter onMouseLeave
  const [member1IsOn, setMember1IsOn] = useState(false);
  const [member2IsOn, setMember2IsOn] = useState(false);
  const [member3IsOn, setMember3IsOn] = useState(false);
  const [member4IsOn, setMember4IsOn] = useState(false);

  const onMouseEnterHandler = (numberOfMember) => {
    switch (numberOfMember) {
      case 1:
        setMember1IsOn(true);
        break;
      case 2:
        setMember2IsOn(true);
        break;
      case 3:
        setMember3IsOn(true);
        break;
      case 4:
        setMember4IsOn(true);
        break;
    }
  };
  const onMouseLeaveHandler = (numberOfMember) => {
    switch (numberOfMember) {
      case 1:
        setMember1IsOn(false);
        break;
      case 2:
        setMember2IsOn(false);
        break;
      case 3:
        setMember3IsOn(false);
        break;
      case 4:
        setMember4IsOn(false);
        break;
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.header}>Our Team</h2>
      <p className={classes.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className={classes.members}>
        <div
          className={classes.member}
          id={classes.ava1}
          onMouseEnter={() => onMouseEnterHandler(1)}
          onMouseLeave={() => onMouseLeaveHandler(1)}
        >
          {member1IsOn && (
            <div className={classes["member-des"]}>
              <div className={classes["member-name"]}>Jhon Doe</div>
              <div className={classes["member-position"]}>
                Digital Marketing Manager
              </div>
            </div>
          )}
        </div>
        <div
          className={classes.member}
          id={classes.ava2}
          onMouseEnter={() => onMouseEnterHandler(2)}
          onMouseLeave={() => onMouseLeaveHandler(2)}
        >
          {member2IsOn && (
            <div className={classes["member-des"]}>
              <div className={classes["member-name"]}>Jhon Doe</div>
              <div className={classes["member-position"]}>
                Digital Marketing Manager
              </div>
            </div>
          )}
        </div>
        <div
          className={classes.member}
          id={classes.ava3}
          onMouseEnter={() => onMouseEnterHandler(3)}
          onMouseLeave={() => onMouseLeaveHandler(3)}
        >
          {member3IsOn && (
            <div className={classes["member-des"]}>
              <div className={classes["member-name"]}>Jhon Doe</div>
              <div className={classes["member-position"]}>
                Digital Marketing Manager
              </div>
            </div>
          )}
        </div>
        <div
          className={classes.member}
          id={classes.ava4}
          onMouseEnter={() => onMouseEnterHandler(4)}
          onMouseLeave={() => onMouseLeaveHandler(4)}
        >
          {member4IsOn && (
            <div className={classes["member-des"]}>
              <div className={classes["member-name"]}>Jhon Doe</div>
              <div className={classes["member-position"]}>
                Digital Marketing Manager
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamInfo;
