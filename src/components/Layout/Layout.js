import * as React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";

const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
