import { useEffect } from "react";
import BoxOrders from "../../components/organisms/AdminOrganisms/Dasboard/BoxOrders.organism";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../lib/redux/admin/admin-orders.reducer";
import ListOrders from "../../components/organisms/AdminOrganisms/Orders/Table/ListOrders.organism";
import OrderDetails from "../../components/organisms/AdminOrganisms/Orders/OrderDetails/OrderDetails.organism";

function AdminDashboardFragment() {
  const { openOrderDetails } = useSelector((state) => state.adminOrderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Recent Orders"));
  }, [dispatch]);

  return (
    <>
      <section
        className={`${
          openOrderDetails ? "hidden" : "block"
        } min-h-screen py-24 bg-gray-700 text-neutral-300`}
      >
        <header className="px-5 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[26rem] ">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </header>
        <BoxOrders />
        <ListOrders />
      </section>
      <OrderDetails />
    </>
  );
}

export default AdminDashboardFragment;
