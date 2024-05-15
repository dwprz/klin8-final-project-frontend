/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import convertToFormattedDate from "../../../../../../helpers/convert-to-formated-date.helper";

function StatusDetailsAtom({ index, status }) {
  const { order, currentStatus } = useSelector(
    (state) => state.adminOrderDetails
  );

  return (
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
      {status.date && <p>{convertToFormattedDate(status.date)}</p>}
      <div className="flex items-center gap-4 h-max">
        <i className={`${status.icon} text-2xl`}></i>
        <p className="text-xs">{status.description}</p>
      </div>
    </div>
  );
}

export default StatusDetailsAtom;
