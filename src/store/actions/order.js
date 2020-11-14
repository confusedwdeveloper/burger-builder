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

export const purchaseBurgerStart = (orderData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/orders.json", orderData);
      console.log(res.data);
      dispatch(purchaseBurgerSuccess(res.data, orderData));
    } catch (err) {
      dispatch(purchaseBurgerFail(err));
    }
  };
};
