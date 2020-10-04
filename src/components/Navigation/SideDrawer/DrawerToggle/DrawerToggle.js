import * as React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ clicked }) => {
  return (
    <div onClick={clicked} className={classes.container}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </div>
  );
};

export default DrawerToggle;
