import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home/Home";
import Error from "../app/pages/Error/Error";
import Login from "../app/pages/Auth/Login";
import Register from "../app/pages/Auth/Register";
import Service from "../app/pages/Service/Service";
import ServiceDetail from "../app/pages/Service/ServiceDetail/ServiceDetail";
import About from "../app/pages/About/About";
import Cart from "../app/pages/Cart/Cart";
import Contact from "../app/pages/Contact/Contact";
import Profile from "../app/pages/Profile/Profile";


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
