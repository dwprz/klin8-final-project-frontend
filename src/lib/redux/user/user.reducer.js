import { createSlice } from "@reduxjs/toolkit";
import { userThunk } from "./user.action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLogin: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetch user
    builder.addCase(userThunk.fetchUserData.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLogin = true;
        state.user = action.payload;
      }
    });

    // logout
    builder.addCase(userThunk.logout.fulfilled, (state) => {
      state.isLogin = false;
      state.user = {};
    });
  },
});

export default userSlice.reducer;
