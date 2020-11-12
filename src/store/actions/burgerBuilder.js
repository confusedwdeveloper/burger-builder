import * as types from "./actionTypes";

export const addIngredient = (ingredientName) => {
  return {
    type: types.ADD_INGREDIENT,
    ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: types.REMOVE_INGREDIENT,
    ingredientName,
  };
};
