import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
