import { createSlice } from "@reduxjs/toolkit";
import { deleteCartItem, fetchCartUser } from "./cart.action";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalSum: 0,
  },
  reducers: {
    addQuantity(state, action) {
      const id = action.payload;
      console.log(id, "ini id");
      state.cart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(item.quantity + 1, 100),
              totalPrice: Math.min(item.quantity + 1, 100) * item.price,
            }
          : item
      );
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 1),
              totalPrice: Math.max(item.quantity - 1, 1) * item.price,
            }
          : item
      );
    },

    updateTotalSUm(state, action) {
      const cart = action.payload;
      state.totalSum = cart.reduce((acc, item) => acc + item.totalPrice, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartUser.fulfilled, (state, action) => {
      state.cart = action.payload;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export const { addQuantity, decreaseQuantity, updateTotalSUm } =
  cartSlice.actions;
export default cartSlice.reducer;
