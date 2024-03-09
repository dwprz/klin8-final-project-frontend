import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
  },
  reducers: {
    createOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
