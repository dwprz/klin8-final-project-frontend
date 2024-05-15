/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { adminService } from "../../../../../../service/admin.service";
import {
  setActive,
  setFilterStatus,
  setOpenFilterMenu,
  setOrders,
  setPage,
  setPaging,
} from "../../../../../../lib/redux/admin/admin-orders.reducer";

function FilterStatusMenu({ status }) {
  const dispatch = useDispatch();

  const handleOrdersFilter = async (status) => {
    try {
      setPage(1);
      dispatch(setOpenFilterMenu(false));

      const result = await adminService.getOrdersByStatus(status, 1);

      dispatch(setActive("FILTER"));
      dispatch(setFilterStatus(status));
      dispatch(setOrders(result.data));
      dispatch(setPaging(result.paging));
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <li
      className="hover:bg-primary hover:text-neutral-100 mx-1 rounded-xl"
      onClick={() => handleOrdersFilter(status)}
    >
      <span className="px-4">{status.replace(/_/g, " ")}</span>
    </li>
  );
}

export default FilterStatusMenu;
