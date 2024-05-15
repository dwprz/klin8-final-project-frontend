/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import convertToFormattedDate from "../../../../helpers/convert-to-formated-date.helper";
import { adminService } from "../../../../service/admin.service";

function AdminOrderDetail(props) {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [currentStatusId, setCurrentStatusId] = useState(null);
  const [order, setOrder] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);
  const [updateStatusId, setUpdateStatusId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const statusRef = useRef(null);

  useEffect(() => {
    setOrder(props.order);
  }, [props]);

  useEffect(() => {
    if (order) {
      const status = order.statuses.find((status) => status.isCurrentStatus);
      setCurrentStatus(status.statusName);
      setCurrentStatusId(status.statusId);
    }
  }, [order]);

  const handleUpdateStatus = async () => {
    try {
      if (updateStatus && currentStatusId < updateStatusId) {
        setIsLoading(true);

        await adminService.updateOrderStatus({
          orderId: order.orderId,
          status: updateStatus,
        });

        location.reload();
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    order && (
      <div className="flex flex-col justify-between h-max bg-white">
        <div className="mt-14 lg:mt-20">
          <div className="px-7 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-2 text-gray-700 ">
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
          </div>

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

        {/* Update status */}
        <div className="text-gray-600 px-5 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 pb-14">
          <div className="flex flex-col w-4/5">
            <span className="text-gray-600">Update Status:</span>
            <div
              className="relative text-sm px-3 py-1 border-2 border-primary rounded-full mt-1"
              onClick={() => {
                statusRef.current.classList.toggle("hidden");
                statusRef.current.classList.toggle("flex");
              }}
            >
              {currentStatus && currentStatus.replace(/_/g, " ")}
              <i className="fa-solid fa-chevron-down absolute right-3 top-[0.4rem]"></i>
            </div>
            <ul
              ref={statusRef}
              className="hidden flex-col mt-2 text-sm border border-gray-500 px-1 py-3 rounded-xl"
            >
              {order.statuses.map((status, index) => {
                const statusName = status.statusName.replace(/_/g, " ");

                return (
                  <li
                    key={index}
                    className="hover:bg-primary rounded-lg hover:text-neutral-100 flex items-center px-2 py-1 gap-2"
                    onClick={() => {
                      setUpdateStatus(status.statusName);
                      setUpdateStatusId(status.statusId);
                      setCurrentStatus(status.statusName);
                    }}
                  >
                    <div
                      className={`${
                        status.statusName === currentStatus
                          ? "bg-primary"
                          : "bg-gray-300"
                      } px-1 py-1 rounded-full w-max h-max`}
                    ></div>
                    {statusName}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10">
            <button
              disabled={isLoading}
              className="px-5 py-1 bg-primary hover:bg-secondary rounded-full text-neutral-100 text-lg"
              onClick={handleUpdateStatus}
            >
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>

        <div className="text-gray-600">
          <hr className="border-gray-600" />
          <img
            src="/assets/logo/klin8-high-resolution-logo-transparent.svg"
            className="py-7 w-[7rem] mx-auto"
          ></img>
        </div>
      </div>
    )
  );
}

export default AdminOrderDetail;
