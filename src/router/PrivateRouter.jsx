/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../lib/redux/user/user.action";
import { useNavigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogin) {
      const timeoutId = setTimeout(() => {
        navigate("/users/login");
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isLogin, navigate]);

  return isLogin ? children : null;
}

export default PrivateRouter;
