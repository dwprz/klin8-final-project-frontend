import { createSlice } from "@reduxjs/toolkit";
import { orderThunk } from "./order.action";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    currentUserOrders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(
      orderThunk.fetchCurrentUserOrders.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.currentUserOrders = action.payload;
        }
      }
    );
  },
});

export default orderSlice.reducer;
