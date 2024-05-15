/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStatus,
  setUpdateStatus,
  setUpdateStatusId,
} from "../../../../../../lib/redux/admin/admin-order-details.reducer";

function StatusList({ statusRef }) {
  const dispatch = useDispatch();

  const { order, currentStatus } = useSelector(
    (state) => state.adminOrderDetails
  );

  return (
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
              dispatch(setUpdateStatus(status.statusName));
              dispatch(setUpdateStatusId(status.statusId));
              dispatch(setCurrentStatus(status.statusName));
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
  );
}

export default StatusList;
