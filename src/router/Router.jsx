import { createBrowserRouter } from "react-router-dom";
import HomePage from "../app/pages/Home.page";
import ErrorPage from "../app/pages/Error.page";
import SecureAuthRouter from "./SecureAuthRouter";
import LoginPage from "../app/pages/AuthPages/Login.page";
import RegisterPage from "../app/pages/AuthPages/Register.page";
import ServicePage from "../app/pages/Service.page";
import AboutPage from "../app/pages/About.page";
import PrivateRouter from "./PrivateRouter";
import OrderPage from "../app/pages/Order.page";
import ContactPage from "../app/pages/Contact.page";
import VerifyOtpFragment from "../app/Fragments/AuthFragments/VerifyOtp.fragment";
import AdminDashboardPage from "../app/pages/AdminPages/AdminDasboard.page";
import AdminCreateOrderPage from "../app/pages/AdminPages/Orders/AdminCreateOrder.page";
import AdminCompletedOrdersPage from "../app/pages/AdminPages/Orders/AdminCompletedOrders.page";
import AdminUncompletedOrdersPage from "../app/pages/AdminPages/Orders/AdminUncompletedOrders.page";
import AdminCanceledOrdersPage from "../app/pages/AdminPages/Orders/AdminCanceledOrders.page";
import ListUsersPage from "../app/pages/AdminPages/Users/ListUsers.page";
import SettingsPage from "../app/pages/SettingsPages/Settings.page";
import ProfileSettingsPage from "../app/pages/SettingsPages/ProfileSettings.page";
import ChangePasswordPage from "../app/pages/SettingsPages/ChangePassword.page";
import ChangeEmailPage from "../app/pages/SettingsPages/ChangeEmail.page";
import AdminRouter from "./AdminRouter";
import OrderDetailsPage from "../app/pages/OrderDetails.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/login",
    element: (
      <SecureAuthRouter>
        <LoginPage />
      </SecureAuthRouter>
    ),
  },
  {
    path: "/users/register",
    element: (
      <SecureAuthRouter>
        <RegisterPage />
      </SecureAuthRouter>
    ),
  },
  {
    path: "/users/otp/verify",
    element: <VerifyOtpFragment />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/order/details",
    element: <OrderDetailsPage />,
  },
  {
    path: "/users/orders",
    element: (
      <PrivateRouter>
        <OrderPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/admins/dashboard",
    element: (
      <AdminRouter>
        <AdminDashboardPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/orders/create",
    element: (
      <AdminRouter>
        <AdminCreateOrderPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/orders/completed",
    element: (
      <AdminRouter>
        <AdminCompletedOrdersPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/orders/uncompleted",
    element: (
      <AdminRouter>
        <AdminUncompletedOrdersPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/orders/canceled",
    element: (
      <AdminRouter>
        <AdminCanceledOrdersPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/list-admins",
    element: (
      <AdminRouter>
        <ListUsersPage />
      </AdminRouter>
    ),
  },
  {
    path: "/admins/list-users",
    element: (
      <AdminRouter>
        <ListUsersPage />
      </AdminRouter>
    ),
  },
  {
    path: "/settings",
    element: (
      <PrivateRouter>
        <SettingsPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/settings/profile",
    element: (
      <PrivateRouter>
        <ProfileSettingsPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/settings/password",
    element: (
      <PrivateRouter>
        <ChangePasswordPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/settings/email",
    element: (
      <PrivateRouter>
        <ChangeEmailPage />
      </PrivateRouter>
    ),
  },
]);

export default router;
