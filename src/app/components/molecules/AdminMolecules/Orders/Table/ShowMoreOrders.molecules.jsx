import { useDispatch, useSelector } from "react-redux";
import { adminOrdersUtil } from "../../../../../../utils/admin-orders.util";

function ShowMoreOrders() {
  const { page, ...selector } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  return (
    <div
      className="mt-7 flex justify-center"
      onClick={() =>
        adminOrdersUtil.handleFetchMoreOrders(dispatch, {
          page: page + 1,
          ...selector,
        })
      }
    >
      <button className="px-3 py-1 bg-primary hover:bg-secondary rounded-full">
        Show More Orders
      </button>
    </div>
  );
}

export default ShowMoreOrders;
