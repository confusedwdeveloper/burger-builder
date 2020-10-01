import * as React from "react";
import Aux from "../../../hoc/Aux";

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.entries(ingredients).map(([igKey, val]) => (
    <li key={igKey + val}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {val}
    </li>
  ));
  // good example of array destructuring in function parameter

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default OrderSummary;
