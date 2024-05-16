/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import convertToFormattedDate from "../../../helpers/convert-to-formated-date.helper";

function OrderDetail(props) {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    setOrder(props.order);
  }, [props]);

  useEffect(() => {
    if (order) {
      const status = order.statuses.find((status) => status.isCurrentStatus);
      setCurrentStatus(status.statusName);
    }
  }, [order]);

  return (
    order && (
      <div className="flex flex-col justify-between h-max mt-24 lg:mt-32">
        <div>
          <header className="px-7 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-2 text-gray-700 ">
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
                  {order.serviceMode
                    ? order.serviceMode.replace(/_/g, " ")
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400 ">Created At:</p>
                <p>
                  {order.createdAt
                    ? convertToFormattedDate(order.createdAt)
                    : "-"}
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
          </header>

          {/* Status Detail */}
          <div className="px-5 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 mt-10">
            {order.statuses.map((status, index) => {
              return (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center h-[7rem] w-[4rem] overflow-hidden mt-[0.2rem]">
                    <div
                      className={`${
                        order.statuses.findIndex(
                          (status) => status.statusName === currentStatus
                        ) +
                          1 >
                        index
                          ? "bg-primary"
                          : "bg-gray-600"
                      } px-2 py-2 rounded-full z-10`}
                    ></div>
                    {order.statuses.length - 1 > index && (
                      <div
                        className={`${
                          order.statuses.findIndex(
                            (status) => status.statusName === currentStatus
                          ) > index
                            ? "border-primary"
                            : "border-gray-600"
                        } border-t w-[7rem] rotate-90 translate-y-10`}
                      ></div>
                    )}
                  </div>
                  <div
                    className={
                      order.statuses.findIndex(
                        (status) => status.statusName === currentStatus
                      ) +
                        1 >
                      index
                        ? "text-primary"
                        : "text-gray-600"
                    }
                  >
                    {status.date && (
                      <p>{convertToFormattedDate(status.date)}</p>
                    )}
                    <div className="flex items-center gap-4 h-max">
                      <i className={`${status.icon} text-2xl`}></i>
                      <p className="text-xs">{status.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default OrderDetail;
