import { useDispatch } from "react-redux";
import { adminService } from "../../../../../service/admin.service";
import {
  setActive,
  setCustomerNameSearch,
  setOrders,
  setPage,
  setPaging,
} from "../../../../../lib/redux/admin/admin-orders.reducer";

function SearchByCustomerName() {
  const dispatch = useDispatch();

  const handleOrdersSearch = async (event) => {
    try {
      if (event.key === "Enter") {
        dispatch(setPage(1));

        const customerName = encodeURIComponent(event.target.value);
        const result = await adminService.getOrdersByCustomer(customerName, 1);

        dispatch(setActive("SEARCH"));
        dispatch(setCustomerNameSearch(customerName));
        dispatch(setPaging(result.paging));
        dispatch(setOrders(result.data));
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div className="relative w-3/4 xl:w-2/5 text-gray-700">
      <input
        onKeyDown={handleOrdersSearch}
        type="search"
        name="search"
        className="px-10 py-1 w-full border rounded-full focus:outline outline-primary"
        placeholder="Customer name..."
      />
      <i className="fa-solid fa-magnifying-glass absolute left-2 top-2 pe-2 border-r border-gray-700"></i>
    </div>
  );
}

export default SearchByCustomerName;
