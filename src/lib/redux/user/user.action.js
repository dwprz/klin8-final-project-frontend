import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../../service/user.service";
import { authService } from "../../../service/auth.service";

const fetchUserData = createAsyncThunk(
  "extraReducer/fetchUserData",
  async () => {
    try {
      const data = await userService.get();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const logout = createAsyncThunk("extraReducer/logout", async () => {
  try {
    await authService.logout();
  } catch (error) {
    console.log(error);
  }
});

export const userThunk = {
  fetchUserData,
  logout,
};
