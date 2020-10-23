import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = Object.entries(props.ingredients).map(
    ([ingredient, val]) => ({
      name: ingredient,
      amount: val,
    })
  );
  // filter out ingredients which don't have value
  let filteredIngredients = ingredients.filter((ig) => ig.amount !== 0);
  // now sort by bigger amount to smaller amount
  filteredIngredients.sort((a, b) => {
    return b.amount - a.amount;
  });

  const output = filteredIngredients.map((ig) => (
    <span
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding: "5px",
      }}
      key={ig.name}
    >
      {ig.name} ({ig.amount})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {output}</p>
      <p>
        Price: <strong>Rs {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
