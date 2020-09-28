import * as React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  // transform to array
  const transformedIngredients = Object.keys(ingredients).map((igkey) => {
    return [...Array(ingredients[igkey])].map((_, i) => (
      <BurgerIngredient key={igkey + i} type={igkey} />
    ));
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
