import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home/Home";
import Error from "../app/pages/Error/Error";
import SecureAuthRouter from "./SecureAuthRouter";
import Login from "../app/pages/Auth/Login";
import Register from "../app/pages/Auth/Register";
import Service from "../app/pages/Service/Service";
import About from "../app/pages/About/About";
import PrivateRouter from "./PrivateRouter";
import Cart from "../app/pages/Cart/Cart";
import Contact from "../app/pages/Contact/Contact";
import Profile from "../app/pages/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/users/login",
    element: (
      <SecureAuthRouter>
        <Login />
      </SecureAuthRouter>
    ),
  },
  {
    path: "/users/register",
    element: (
      <SecureAuthRouter>
        <Register />
      </SecureAuthRouter>
    ),
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: (
      <PrivateRouter>
        <Cart />
      </PrivateRouter>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <Profile />
      </PrivateRouter>
    ),
  },
]);

export default router;
