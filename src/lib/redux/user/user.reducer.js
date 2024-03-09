import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./user.action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLogin: false,
  },
  reducers: {
    logout(state) {
      state.isLogin = false;
      state.user = {};
      window.localStorage.removeItem("session");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLogin = true;
        state.user = action.payload;
      }
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
