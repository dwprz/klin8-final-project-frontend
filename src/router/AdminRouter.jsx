/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../lib/redux/user/user.action";
import { useNavigate } from "react-router-dom";

function AdminRouter({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (user.role !== "ADMIN") {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [user, navigate]);

  return isLogin ? children : null;
}

export default AdminRouter;
