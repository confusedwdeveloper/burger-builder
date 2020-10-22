import * as React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ children, link, exact }) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact={exact} activeClassName={classes.active} to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
