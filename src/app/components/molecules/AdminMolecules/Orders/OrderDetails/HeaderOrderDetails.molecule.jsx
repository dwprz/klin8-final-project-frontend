import { useDispatch, useSelector } from "react-redux";
import convertToFormattedDate from "../../../../../../helpers/convert-to-formated-date.helper";
import OrderDetailsAtom from "../../../../atoms/AdminAtoms/Orders/OrderDetails/OrderDetails.atom";
import CustomerName from "../../../../atoms/AdminAtoms/Orders/OrderDetails/CustomerName.atom";
import TotalPrice from "../../../../atoms/AdminAtoms/Orders/OrderDetails/TotalPrice.atom";
import { useEffect } from "react";
import {
  setCurrentStatus,
  setCurrentStatusId,
} from "../../../../../../lib/redux/admin/admin-order-details.reducer";

function HeaderOrderDetails() {
  const { order } = useSelector((state) => state.adminOrderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (order) {
      const status = order.statuses.find((status) => status.isCurrentStatus);
      dispatch(setCurrentStatus(status.statusName));
      dispatch(setCurrentStatusId(status.statusId));
    }
  }, [dispatch, order]);

  return (
    <header className="px-7 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-2 text-gray-700 ">
      <CustomerName customerName={order.customerName || "-"} />

      <div className="flex flex-col gap-2 px-3 py-2 bg-slate-100 rounded-2xl">
        <OrderDetailsAtom title={"Item Name:"}>
          <p>
            {order.itemName || "-"} ({order.quantity || "-"})
          </p>
        </OrderDetailsAtom>

        <OrderDetailsAtom title={"Service Name:"}>
          <p>{order.serviceName || "-"}</p>
        </OrderDetailsAtom>

        <OrderDetailsAtom title={"Service Mode:"}>
          <p>
            {order.serviceMode ? order.serviceMode.replace(/_/g, " ") : "-"}
          </p>
        </OrderDetailsAtom>

        <OrderDetailsAtom title={"Created At:"}>
          <p>
            {order.createdAt ? convertToFormattedDate(order.createdAt) : "-"}
          </p>
        </OrderDetailsAtom>
      </div>

      <TotalPrice>
        <p className="text-primary">
          {order.totalPrice
            ? order.totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            : "-"}
        </p>
      </TotalPrice>
    </header>
  );
}

export default HeaderOrderDetails;
