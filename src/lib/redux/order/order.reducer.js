import { createSlice } from "@reduxjs/toolkit";
import { orderThunk } from "./order.action";
import mergeFetchData from "../../../helpers/merge-fetch-data.helper";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    currentUserOrders: [],
    paging: {},
  },
  extraReducers: (builder) => {
    builder.addCase(
      orderThunk.fetchCurrentUserOrders.fulfilled,
      (state, action) => {
        if (action.payload) {
          const result = mergeFetchData(
            state.currentUserOrders,
            action.payload.data
          );

          state.currentUserOrders = result;
          state.paging = action.payload.paging;
        }
      }
    );
  },
});

export default orderSlice.reducer;
