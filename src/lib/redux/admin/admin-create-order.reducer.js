import { createSlice } from "@reduxjs/toolkit";

const adminCreateOrderSlice = createSlice({
  name: "admin create order",
  initialState: {
    serviceName: null,
    quantity: 1,
    totalPrice: 0,
    serviceMode: null,
    paymentMethod: null,
    error: null,
    isLoading: false,
    isSuccess: false,
    order: {},
    openCreateOrderSection: true,
    openReceiptSection: false,
  },
  reducers: {
    setServiceName(state, action) {
      state.serviceName = action.payload;
    },

    setQuantity(state, action) {
      state.quantity = action.payload;
    },

    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },

    setServiceMode(state, action) {
      state.serviceMode = action.payload;
    },

    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    setIsSuccess(state, action) {
      state.isSuccess = action.payload;
    },

    setOrder(state, action) {
      state.order = action.payload;
    },

    setOpenCreateOrderSection(state, action) {
      state.openCreateOrderSection = action.payload;
    },
    setOpenReceiptSection(state, action) {
      state.openReceiptSection = action.payload;
    },
  },
});

export const {
  setServiceName,
  setQuantity,
  setTotalPrice,
  setServiceMode,
  setPaymentMethod,
  setError,
  setIsLoading,
  setIsSuccess,
  setOrder,
  setOpenCreateOrderSection,
  setOpenReceiptSection,
} = adminCreateOrderSlice.actions;

export default adminCreateOrderSlice.reducer;
