import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderService } from "../../../service/order.service";

const fetchCurrentUserOrders = createAsyncThunk(
  "orders/fetchByCurrentUser",
  async (page) => {
    try {
      const result = await orderService.getByCurrentUser(page);
      return result;
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
);

export const orderThunk = {
  fetchCurrentUserOrders,
};
