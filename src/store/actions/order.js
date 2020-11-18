import * as types from "./actionTypes";
import axios from "../../axios-orders";

// id will be identifier on backend
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: types.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: types.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => ({
  type: types.PURCHASE_BURGER_START,
});

export const purchaseBurger = (orderData) => {
  return async (dispatch) => {
    dispatch(purchaseBurgerStart());
    try {
      const res = await axios.post("/orders.json", orderData);
      console.log(res.data);
      dispatch(purchaseBurgerSuccess(res.data.name, orderData));
    } catch (err) {
      dispatch(purchaseBurgerFail(err));
    }
  };
};
