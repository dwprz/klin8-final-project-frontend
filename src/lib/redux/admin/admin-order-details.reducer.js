import { createSlice } from "@reduxjs/toolkit";

const adminOrderDetailsSlice = createSlice({
  name: "admin order details",
  initialState: {
    order: null,
    openOrderDetails: false,
    currentStatus: null,
    currentStatusId: null,
    updateStatus: null,
    updateStatusId: null,
    isLoading: false,
  },
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },

    setOpenOrderDetails(state, action) {
      state.openOrderDetails = action.payload;
    },

    setCurrentStatus(state, action) {
      state.currentStatus = action.payload;
    },

    setCurrentStatusId(state, action) {
      state.currentStatusId = action.payload;
    },

    setUpdateStatus(state, action) {
      state.updateStatus = action.payload;
    },

    setUpdateStatusId(state, action) {
      state.updateStatusId = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setOrder,
  setOpenOrderDetails,
  setCurrentStatus,
  setCurrentStatusId,
  setUpdateStatus,
  setUpdateStatusId,
  setIsLoading,
} = adminOrderDetailsSlice.actions;

export default adminOrderDetailsSlice.reducer;
