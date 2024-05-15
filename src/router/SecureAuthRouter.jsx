/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userThunk } from "../lib/redux/user/user.action";
import { useNavigate } from "react-router-dom";

function SecureAuthRouter({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (isLogin) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isLogin, navigate]);

  return !isLogin ? children : null;
}

export default SecureAuthRouter;
