import { useSelector } from "react-redux";
import convertToFormattedDate from "../../../../../../helpers/convert-to-formated-date.helper";

function ReceiptDetails() {
  const { order } = useSelector((state) => state.adminCreateOrder);

  return (
    <div className="px-7 flex flex-col gap-2">
      <p className="text-xl font-bold px-3 py-2 bg-slate-100 rounded-2xl">
        {order.customerName || "-"}
      </p>

      <div className="flex flex-col gap-2 px-3 py-2 bg-slate-100 rounded-2xl">
        <div>
          <p className="text-sm text-gray-400 ">Item Name:</p>
          <p>
            {order.itemName || "-"} ({order.quantity || "-"})
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 ">Service Name:</p>
          <p>{order.serviceName || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400 ">Service Mode:</p>
          <p>
            {order.serviceMode ? order.serviceMode.replace(/_/g, " ") : "-"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 ">Created At:</p>
          <p>
            {order.createdAt ? convertToFormattedDate(order.createdAt) : "-"}
          </p>
        </div>
      </div>

      <div className="flex justify-between font-bold px-3 py-2 bg-slate-100 rounded-2xl">
        <p>Total:</p>
        <p className="text-primary">
          {order.totalPrice
            ? order.totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            : "-"}
        </p>
      </div>
    </div>
  );
}

export default ReceiptDetails;
