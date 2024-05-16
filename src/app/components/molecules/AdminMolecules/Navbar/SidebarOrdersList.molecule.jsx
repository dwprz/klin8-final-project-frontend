import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setOpenOrdersList,
  setOpenUsersList,
} from "../../../../../lib/redux/admin/admin-navbar.reducer";

function SidebarOrdersList() {
  const { openOrdersList } = useSelector((state) => state.adminNavbar);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="px-3 py-2 hover:bg-primary rounded-lg"
        onClick={() => {
          dispatch(setOpenOrdersList(!openOrdersList));
          dispatch(setOpenUsersList(false));
        }}
      >
        <i className="fa-solid fa-boxes-stacked me-2"></i>
        <p>Orders</p>
      </div>
      <ul
        id="ORDERS"
        className={`${
          pathname === "/admins/orders/create" ||
          pathname === "/admins/orders/completed" ||
          pathname === "/admins/orders/uncompleted" ||
          pathname === "/admins/orders/canceled" ||
          openOrdersList
            ? "flex"
            : "hidden"
        } flex-col list-disc ps-9 text-gray-300`}
      >
        <li
          onClick={() => navigate("/admins/orders/create")}
          className={`${
            pathname === "/admins/orders/create" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg`}
        >
          Create
        </li>
        <li
          onClick={() => navigate("/admins/orders/completed")}
          className={`${
            pathname === "/admins/orders/completed" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg`}
        >
          Completed
        </li>
        <li
          onClick={() => navigate("/admins/orders/uncompleted")}
          className={`${
            pathname === "/admins/orders/uncompleted" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg`}
        >
          Uncompleted
        </li>
        <li
          onClick={() => navigate("/admins/orders/canceled")}
          className={`${
            pathname === "/admins/orders/canceled" && "bg-primary rounded-lg"
          } px-3 py-1 hover:bg-primary rounded-lg`}
        >
          Canceled
        </li>
      </ul>
    </div>
  );
}

export default SidebarOrdersList;
