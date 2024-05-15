import { useEffect } from "react";
import ListOrders from "../../../components/organisms/AdminOrganisms/Orders/Table/ListOrders.organism";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../../lib/redux/admin/admin-orders.reducer";

function AdminCanceledOrdersFragment() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Uncompleted Orders"));
  }, [dispatch]);

  return (
    <>
      <section className="min-h-screen py-20 bg-gray-700 text-neutral-300">
        <ListOrders />
      </section>
    </>
  );
}

export default AdminCanceledOrdersFragment;
