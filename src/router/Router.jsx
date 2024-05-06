import { createBrowserRouter } from "react-router-dom";
import HomePage from "../app/pages/Home.page";
import ErrorPage from "../app/pages/Error.page";
import SecureAuthRouter from "./SecureAuthRouter";
import LoginPage from "../app/pages/AuthPages/Login.page";
import RegisterPage from "../app/pages/AuthPages/Register.page";
import ServicePage from "../app/pages/Service.page";
import AboutPage from "../app/pages/About.page";
import PrivateRouter from "./PrivateRouter";
import CartPage from "../app/pages/Cart.page";
import ContactPage from "../app/pages/Contact.page";
import ProfilePage from "../app/pages/Profile.page";
import VerifyOtpFragment from "../app/Fragments/AuthFragments/VerifyOtp.fragment";

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
    path: "/cart",
    element: (
      <PrivateRouter>
        <CartPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <ProfilePage />
      </PrivateRouter>
    ),
  },
]);

export default router;
