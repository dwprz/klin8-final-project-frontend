/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../lib/redux/user/user.action";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  return isLogin ? children : <Navigate to={"/users/login"} />;
}

export default PrivateRouter;
