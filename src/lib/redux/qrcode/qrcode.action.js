import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderService } from "../../../service/order.service";

const getOrderById = createAsyncThunk("order/getById", async (orderId) => {
  try {
    const result = await orderService.getOrderById(orderId);
    return result;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
});

export const qrcodeThunk = {
  getOrderById,
};
