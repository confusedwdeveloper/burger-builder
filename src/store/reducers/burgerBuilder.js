import * as types from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 100,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 30,
  meat: 60,
  bacon: 25,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };

  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);

  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };

  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };

  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);

  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
  };

  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 100,
    error: false,
  });
};

const fetchIngredientsFailed = (state) => updateObject(state, { error: true });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_INGREDIENT: {
      return addIngredient(state, action);
    }
    case types.REMOVE_INGREDIENT: {
      return removeIngredient(state, action);
    }
    case types.SET_INGREDIENTS: {
      return setIngredients(state, action);
    }
    case types.FETCH_INGREDIENTS_FAILED: {
      return fetchIngredientsFailed(state);
    }
    default: {
      return state;
    }
  }
}
