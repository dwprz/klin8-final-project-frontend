import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../../service/user/user.service";

export const fetchUserData = createAsyncThunk(
  "extrareducer/fetchuserdata",
  async () => {
    const data = await userService.get();
    return data;
  }
);
