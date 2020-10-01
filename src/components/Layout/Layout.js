import * as React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
