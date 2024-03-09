import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";
import countReducer from "./count/count.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    count: countReducer
  },
});

export default store;
