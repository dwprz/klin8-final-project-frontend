import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../../service/user.service";
import { authService } from "../../../service/auth.service";

const fetchUserData = createAsyncThunk("users/fetchUserData", async () => {
  try {
    const result = await userService.get();
    return result;
  } catch (error) {
    console.log(error.response.data.error);
  }
});

const logout = createAsyncThunk("users/logout", async () => {
  try {
    await authService.logout();
  } catch (error) {
    console.log(error.response.data.error);
  }
});

export const userThunk = {
  fetchUserData,
  logout,
};
