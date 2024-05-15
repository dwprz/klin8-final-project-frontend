import { useDispatch, useSelector } from "react-redux";
import FilterStatusMenu from "../../../../atoms/AdminAtoms/Orders/Table/FilterStatusMenu.atom";
import { setOpenFilterMenu } from "../../../../../../lib/redux/admin/admin-orders.reducer";

function FilterOrders() {
  const { openFilterMenu } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  return (
    <i
      onClick={() => {
        dispatch(setOpenFilterMenu(!openFilterMenu));
      }}
      className="relative fa-solid fa-sliders ms-5 px-3 py-3 rounded-full bg-gray-900"
    >
      {/* Filter menu */}
      <div
        className={`${
          openFilterMenu ? "flex" : "hidden"
        } absolute right-0 top-11 flex-col bg-white rounded-2xl text-gray-700 font-poppins font-light text-sm py-3 w-[15rem]`}
      >
        <header>
          <h1 className="pb-2 px-5 font-semibold">Status</h1>
          <hr className="border-gray-600" />
        </header>

        <ul className="flex flex-col gap-1 mt-2">
          <FilterStatusMenu status={"PENDING_PICK_UP"} />
          <FilterStatusMenu status={"IN_PROGRESS"} />
          <FilterStatusMenu status={"BEING_DELIVERED"} />
          <FilterStatusMenu status={"READY_FOR_COLLECTION"} />
          <FilterStatusMenu status={"COMPLETED"} />
          <FilterStatusMenu status={"CANCELED"} />
        </ul>
      </div>
    </i>
  );
}

export default FilterOrders;
