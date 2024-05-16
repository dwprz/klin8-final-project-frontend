import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openServiceDetails: false,
  },
  reducers: {
    setOPenServiceDetails(state, action) {
      state.openServiceDetails = action.payload;
    },
  },
});

export const { setOPenServiceDetails } = serviceSlice.actions;

export default serviceSlice.reducer;
