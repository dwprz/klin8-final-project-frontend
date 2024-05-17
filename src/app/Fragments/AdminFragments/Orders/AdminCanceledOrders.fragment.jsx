import { useEffect } from "react";
import ListOrders from "../../../components/organisms/AdminOrganisms/Orders/Table/ListOrders.organism";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../../lib/redux/admin/admin-orders.reducer";
import OrderDetails from "../../../components/organisms/AdminOrganisms/Orders/OrderDetails/OrderDetails.organism";

function AdminCanceledOrdersFragment() {
  const { openOrderDetails } = useSelector((state) => state.adminOrderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Canceled Orders"));
  }, [dispatch]);

  return (
    <>
      <section
        className={`${
          openOrderDetails ? "hidden" : "block"
        } min-h-screen py-20 bg-gray-700 text-neutral-300`}
      >
        <ListOrders />
      </section>
      <OrderDetails />
    </>
  );
}

export default AdminCanceledOrdersFragment;
