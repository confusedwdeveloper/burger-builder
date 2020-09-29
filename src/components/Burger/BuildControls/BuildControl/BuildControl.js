import * as React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button disabled={disabled} onClick={removed} className={classes.Less}>
        Less
      </button>
      <button onClick={added} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
