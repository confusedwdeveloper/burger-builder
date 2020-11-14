import * as types from "./actionTypes";
import axios from "../../axios-orders";

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

export const setIngredients = (ingredients) => ({
  type: types.SET_INGREDIENTS,
  ingredients,
});

export const fetchIngredientsFailed = () => ({
  type: types.FETCH_INGREDIENTS_FAILED,
});

export const initIngredients = () => (dispatch) => {
  axios
    .get("/ingredients.json")
    .then((res) => {
      dispatch(setIngredients(res.data));
    })
    .catch(() => {
      dispatch(fetchIngredientsFailed());
    });
};
