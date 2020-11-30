import * as types from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  });
};

const purchaseBurgerFail = (state) => updateObject(state, { loading: false });

const fetchOrdersStart = (state) => updateObject(state, { loading: true });

const fetchOrdersSuccess = (state, action) =>
  updateObject(state, { loading: false, orders: action.orders });

const fetchOrdersFail = (state) => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_INIT: {
      return purchaseInit(state);
    }
    case types.PURCHASE_BURGER_START: {
      return purchaseBurgerStart(state);
    }
    case types.PURCHASE_BURGER_SUCCESS: {
      return purchaseBurgerSuccess(state, action);
    }
    case types.PURCHASE_BURGER_FAIL: {
      return purchaseBurgerFail(state);
    }
    case types.FETCH_ORDERS_START: {
      return fetchOrdersStart(state);
    }
    case types.FETCH_ORDERS_SUCCESS: {
      return fetchOrdersSuccess(state, action);
    }
    case types.FETCH_ORDERS_FAIL: {
      return fetchOrdersFail(state);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
