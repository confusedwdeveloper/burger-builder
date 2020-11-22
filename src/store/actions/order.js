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

export const purchaseInit = () => ({ type: types.PURCHASE_INIT });

export const fetchOrdersSuccess = (orders) => ({
  type: types.FETCH_ORDERS_SUCCESS,
  orders,
});

export const fetchOrdersFail = (error) => ({
  type: types.FETCH_ORDERS_FAIL,
  error,
});

export const fetchOrdersStart = () => ({ type: types.FETCH_ORDERS_START });

export const fetchOrders = () => (dispatch) => {
  dispatch(fetchOrdersStart());
  axios
    .get("/orders.json")
    .then((res) => {
      const orders = [];
      for (const key in res.data) {
        // this approach to save the key or we could have used Object.values
        orders.push({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(fetchOrdersSuccess(orders));
    })
    .catch((err) => {
      dispatch(fetchOrdersFail(err));
    });
};
