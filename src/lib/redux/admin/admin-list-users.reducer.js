import { createSlice } from "@reduxjs/toolkit";

const adminListUsersSlice = createSlice({
  name: "admin list users",
  initialState: {
    users: [],
    user: {},
    role: null,
    openUserDetails: false,
    page: 1,
    paging: {},
    searchFullName: null,
    active: null,
    error: null,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },

    setRole(state, action) {
      state.role = action.payload;
    },

    setOpenUserDetails(state, action) {
      state.openUserDetails = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setPaging(state, action) {
      state.paging = action.payload;
    },

    setSearchFullName(state, action) {
      state.searchFullName = action.payload;
    },

    setActive(state, action) {
      state.active = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setUsers,
  setUser,
  setRole,
  setOpenUserDetails,
  setPage,
  setPaging,
  setSearchFullName,
  setActive,
  setError,
} = adminListUsersSlice.actions;

export default adminListUsersSlice.reducer;
