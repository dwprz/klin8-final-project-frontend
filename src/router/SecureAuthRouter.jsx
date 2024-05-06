/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { userThunk } from "../lib/redux/user/user.action";

function SecureAuthRouter({ children }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  return isLogin ? <Navigate to={"/"} /> : children;
}

export default SecureAuthRouter;
