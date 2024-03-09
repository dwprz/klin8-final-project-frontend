/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../lib/redux/user/user.action";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function SecureAuthRouter({ children }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return isLogin ? <Navigate to={"/"} /> : children;
}

export default SecureAuthRouter;
