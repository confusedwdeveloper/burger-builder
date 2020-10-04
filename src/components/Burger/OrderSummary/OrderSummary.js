import * as React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  price,
}) => {
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
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
