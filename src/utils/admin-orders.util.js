import mergeFetchData from "../helpers/merge-fetch-data.helper";
import { adminThunk } from "../lib/redux/admin/admin.action";
import { setOrders, setPaging } from "../lib/redux/admin/admin-orders.reducer";
import { adminService } from "../service/admin.service";

const handleFetchOrders = async (dispatch, pathname) => {
  try {
    if (pathname === "/admins/dashboard") {
      dispatch(adminThunk.fetchAdminOrders(1));
      dispatch(adminThunk.fetchAdminOrdersCount());
      return;
    }

    if (pathname !== "/admins/dashboard") {
      const status = pathname.split("/")[3].toUpperCase();
      const { data, paging } = await adminService.getOrdersByStatus(status, 1);

      dispatch(setOrders(data));
      dispatch(setPaging(paging));
      return;
    }
  } catch (error) {
    console.log(error.response.data.error);
  }
};

const handleFetchMoreOrders = async (dispatch, selector) => {
  try {
    const { page, orders, active, customerNameSearch, filterStatus } = selector;

    if (active === "ALL") {
      return dispatch(adminThunk.fetchAdminOrders(page));
    }

    if (active === "SEARCH") {
      const { data, paging } = await adminService.getOrdersByCustomer(
        customerNameSearch,
        page
      );

      const result = mergeFetchData(orders, data);
      dispatch(setOrders(result));
      dispatch(setPaging(paging));
      return;
    }

    if (active === "FILTER") {
      const { data, paging } = await adminService.getOrdersByStatus(
        filterStatus,
        page
      );

      const result = mergeFetchData(orders, data);
      dispatch(setOrders(result));
      dispatch(setPaging(paging));
      return;
    }
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const adminOrdersUtil = {
  handleFetchOrders,
  handleFetchMoreOrders,
};
