import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: {},
  },
  reducers: {
    userRegister(state, action) {
      state.user = action.payload;
    },
  },
});

export const { userRegister } = registerSlice.actions;
export default registerSlice.reducer;
