/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userThunk } from "../../../../../lib/redux/user/user.action";

function SidebarList({ title, icon, path }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        pathname === path && "bg-primary rounded-lg"
      } px-3 py-2 hover:bg-primary rounded-lg`}
      onClick={() => {
        if (title === "Sign out") {
          return dispatch(userThunk.logout());
        }

        if (title === "Sign in") {
          return navigate("/users/login");
        }

        navigate(path);
      }}
    >
      <i className={`${icon} me-2`}></i>
      {title}
    </div>
  );
}

export default SidebarList;
