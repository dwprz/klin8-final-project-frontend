import { createSlice } from "@reduxjs/toolkit";
import { qrcodeThunk } from "./qrcode.action";

const qrcodeSlice = createSlice({
  name: "qrcode",
  initialState: {
    order: null,
    selectedDeviceId: null,
    isScanStart: false,
    currentStatus: null,
    error: null,
  },

  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },

    setSelectedDeviceId(state, action) {
      state.selectedDeviceId = action.payload;
    },

    setIsScanStart(state, action) {
      state.isScanStart = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(qrcodeThunk.getOrderById.fulfilled, (state, action) => {
      if (action.payload) {
        state.order = action.payload;

        const { statusName } = action.payload.statuses.find(
          (status) => status.isCurrentStatus
        );

        state.currentStatus = statusName;
      }
    });
  },
});

export const {
  setOrder,
  setSelectedDeviceId,
  setCodeReader,
  setIsScanStart,
  setError,
} = qrcodeSlice.actions;

export default qrcodeSlice.reducer;
