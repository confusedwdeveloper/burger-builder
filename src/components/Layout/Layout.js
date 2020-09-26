import * as React from "react";

import Aux from "../../hoc/Aux";

const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main>{children}</main>
    </Aux>
  );
};

export default Layout;
