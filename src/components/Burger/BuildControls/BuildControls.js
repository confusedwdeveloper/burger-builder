import * as React from "react";
import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>Rs {price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={(e) => ingredientAdded(ctrl.type)}
          removed={(e) => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
