import * as types from "../actions/actionTypes";

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
    case types.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        error: false,
      };
    }
    case types.FETCH_INGREDIENTS_FAILED: {
      return {
        ...state,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}
