import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setOpenOrdersList,
  setOpenUsersList,
} from "../../../../../lib/redux/admin/admin-navbar.reducer";

function SidebarUsersList() {
  const { openUsersList } = useSelector((state) => state.adminNavbar);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="px-3 py-2 hover:bg-primary rounded-lg cursor-pointer"
        onClick={() => {
          dispatch(setOpenUsersList(!openUsersList));
          dispatch(setOpenOrdersList(false));
        }}
      >
        <i className="fa-solid fa-users me-2"></i>
        Users
      </div>
      <ul
        id="USERS"
        className={`${
          pathname === "/admins/list-users" ||
          pathname === "/admins/list-admins" ||
          openUsersList
            ? "flex"
            : "hidden"
        } flex-col list-disc ps-9 text-gray-300`}
      >
        <li
          onClick={() => navigate("/admins/list-users")}
          className={`${
            pathname === "/admins/list-users" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg cursor-pointer`}
        >
          Users
        </li>
        <li
          onClick={() => navigate("/admins/list-admins")}
          className={`${
            pathname === "/admins/list-admins" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg cursor-pointer`}
        >
          Admin
        </li>
      </ul>
    </div>
  );
}

export default SidebarUsersList;
