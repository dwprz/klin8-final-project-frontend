import { createSlice } from "@reduxjs/toolkit";

const adminNavbarSlice = createSlice({
  name: "admin navbar",
  initialState: {
    openNavbar: true,
    openSidebar: false,
    openOrdersList: false,
    openUsersList: false,
  },
  reducers: {
    setOpenNavbar(state, action) {
      state.openNavbar = action.payload;
    },

    setOpenSidebar(state, action) {
      state.openSidebar = action.payload;
    },

    setOpenOrdersList(state, action) {
      state.openOrdersList = action.payload;
    },

    setOpenUsersList(state, action) {
      state.openUsersList = action.payload;
    },
  },
});

export const {
  setOpenNavbar,
  setOpenSidebar,
  setOpenOrdersList,
  setOpenUsersList,
} = adminNavbarSlice.actions;

export default adminNavbarSlice.reducer;
