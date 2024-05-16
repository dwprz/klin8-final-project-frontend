import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";
import registerReducer from "./register/register.reducer";
import adminOrdersReducer from "./admin/admin-orders.reducer";
import adminOrderDetailsReducer from "./admin/admin-order-details.reducer";
import adminCreateOrderReducer from "./admin/admin-create-order.reducer";
import adminNavbarReducer from "./admin/admin-navbar.reducer";
import adminListUsersReducer from "./admin/admin-list-users.reducer";
import serviceReducer from "./Service/service.reducer";
import qrcodeReducer from "./qrcode/qrcode.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    register: registerReducer,
    adminOrders: adminOrdersReducer,
    adminOrderDetails: adminOrderDetailsReducer,
    adminCreateOrder: adminCreateOrderReducer,
    adminNavbar: adminNavbarReducer,
    adminListUsers: adminListUsersReducer,
    service: serviceReducer,
    qrcode: qrcodeReducer,
  },
});

export default store;
