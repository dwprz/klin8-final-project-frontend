/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

function IndikatorOrderStatus({ index }) {
  const { order, currentStatus } = useSelector(
    (state) => state.adminOrderDetails
  );

  return (
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
  );
}

export default IndikatorOrderStatus;
