import * as React from "react";

import classes from "./Modal.module.css";

const Modal = ({ children, show }) => {
  return (
    <div
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? 1 : 0,
      }}
      className={classes.Modal}
    >
      {children}
    </div>
  );
};

export default Modal;
