import * as React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  // transform to array or return p if no ingredients
  let transformedIngredients = Object.keys(ingredients)
    .map((igkey) => {
      return [...Array(ingredients[igkey])].map((_, i) => (
        <BurgerIngredient key={igkey + i} type={igkey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // msg if no ingredient
  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
