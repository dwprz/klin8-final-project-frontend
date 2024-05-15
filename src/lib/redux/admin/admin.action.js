import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminService } from "../../../service/admin.service";

const fetchAdminOrders = createAsyncThunk(
  "orders/fetchOrdersAdmin",
  async (page) => {
    try {
      const result = await adminService.getAdminOrders(page);
      return result;
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
);

const fetchAdminOrdersCount = createAsyncThunk(
  "orders/fetchOrdersCount",
  async () => {
    try {
      const result = await adminService.getOrdersCount();
      return result;
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
);

export const adminThunk = {
  fetchAdminOrders,
  fetchAdminOrdersCount,
};
