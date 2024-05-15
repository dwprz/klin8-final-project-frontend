import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../../../../lib/redux/admin/admin-orders.reducer";
import { useEffect } from "react";
import { adminOrdersUtil } from "../../../../../../utils/admin-orders.util";

function ShowMoreOrders() {
  const { page, ...selector } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 1) {
      adminOrdersUtil.handleFetchMoreOrders(dispatch, { page, ...selector });
    }
  }, [page]);

  return (
    <div className="mt-7 flex justify-center" onClick={() => setPage(page + 1)}>
      <button className="px-3 py-1 bg-primary hover:bg-secondary rounded-full">
        Show More Orders
      </button>
    </div>
  );
}

export default ShowMoreOrders;
