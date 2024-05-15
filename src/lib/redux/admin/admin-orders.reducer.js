import { createSlice } from "@reduxjs/toolkit";
import { adminThunk } from "./admin.action";
import mergeFetchData from "../../../helpers/merge-fetch-data.helper";

const adminOrdersSlice = createSlice({
  name: "admin orders",
  initialState: {
    orders: [],
    ordersCount: {},
    paging: {},
    page: 1,
    title: "",
    active: "ALL",
    customerNameSearch: null,
    filterStatus: null,
    openFilterMenu: false,
  },
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },

    setPaging(state, action) {
      state.paging = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setTitle(state, action) {
      state.title = action.payload;
    },

    setActive(state, action) {
      state.active = action.payload;
    },

    setCustomerNameSearch(state, action) {
      state.customerNameSearch = action.payload;
    },

    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },

    setOpenFilterMenu(state, action) {
      state.openFilterMenu = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(adminThunk.fetchAdminOrders.fulfilled, (state, action) => {
      if (action.payload) {
        const result = mergeFetchData(state.orders, action.payload.data);
        state.orders = result;
        state.paging = action.payload.paging;
      }
    });

    builder.addCase(
      adminThunk.fetchAdminOrdersCount.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.ordersCount = action.payload;
        }
      }
    );
  },
});

export const {
  setOrders,
  setPaging,
  setPage,
  setTitle,
  setActive,
  setCustomerNameSearch,
  setFilterStatus,
  setOpenFilterMenu,
} = adminOrdersSlice.actions;

export default adminOrdersSlice.reducer;
