import { useSelector } from "react-redux";
import BoxOrdersMolecule from "../../../molecules/AdminMolecules/Dashboard/BoxOrders.molecule";

function BoxOrders() {
  const { ordersCount } = useSelector((state) => state.adminOrders);
  return (
    <section className="px-5 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[26rem] grid grid-cols-2 gap-3 mt-7">
      <BoxOrdersMolecule
        title={"Create Order"}
        path={"/admins/orders/create"}
        icon={"fa-solid fa-square-plus"}
      />

      <BoxOrdersMolecule
        title={"Completed Orders"}
        path={"/admins/orders/completed"}
        icon={"fa-solid fa-calendar-check"}
        count={ordersCount.totalCompletedOrders || 0}
      />

      <BoxOrdersMolecule
        title={"Uncompleted Orders"}
        path={"/admins/orders/uncompleted"}
        icon={"fa-solid fa-spinner"}
        count={ordersCount.totalUncompletedOrders || 0}
      />

      <BoxOrdersMolecule
        title={"Canceled Orders"}
        path={"/admins/orders/canceled"}
        icon={"fa-solid fa-calendar-xmark"}
        count={ordersCount.totalCanceledOrders || 0}
      />
    </section>
  );
}

export default BoxOrders;
