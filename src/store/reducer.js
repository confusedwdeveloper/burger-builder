import * as types from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 100,
};

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 30,
  meat: 60,
  bacon: 25,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    }
    case types.REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    }
    default: {
      return state;
    }
  }
}
