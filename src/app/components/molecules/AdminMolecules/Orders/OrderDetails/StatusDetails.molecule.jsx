import { useSelector } from "react-redux";
import StatusDetailsAtom from "../../../../atoms/AdminAtoms/Orders/OrderDetails/StatusDetails.atom";
import IndikatorOrderStatus from "../../../../atoms/AdminAtoms/Orders/OrderDetails/IndikatorOrderStatus.atom";

function StatusDetails() {
  const { order } = useSelector((state) => state.adminOrderDetails);

  return (
    <div className="px-5 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 mt-10">
      {order.statuses.map((status, index) => {
        return (
          <div key={index} className="flex">
            <IndikatorOrderStatus index={index} />
            <StatusDetailsAtom index={index} status={status} />
          </div>
        );
      })}
    </div>
  );
}

export default StatusDetails;
