import * as React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ children, show, modalClosed }) => {
  return (
    <Aux>
      <Backdrop clicked={modalClosed} show={show} />
      <div
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
        className={classes.Modal}
      >
        {children}
      </div>
    </Aux>
  );
};

export default Modal;
