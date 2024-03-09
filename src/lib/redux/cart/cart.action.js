import { createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../../service/cart/cart.service";

export const fetchCartUser = createAsyncThunk(
  "extrareducer/fetchcartdata",
  async (username) => {
    const data = await cartService.get(username);
    return data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "extrareducer/deletecartitem",
  async (id) => {
    const data = await cartService.remove(id);
    return data;
  }
);
