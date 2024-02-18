import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Service from "../pages/Service/Service";
import ServiceDetail from "../pages/Service/ServiceDetail/ServiceDetail";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/service/details/:id",
    element: <ServiceDetail />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
