import { useRef } from "react";
import ButtonOpenStatusList from "../../../../atoms/AdminAtoms/Orders/OrderDetails/ButtonOpenStatusList.atom";
import StatusList from "../../../../atoms/AdminAtoms/Orders/OrderDetails/StatusList.atom";
import ButtonHandleUpdateStatus from "../../../../atoms/AdminAtoms/Orders/OrderDetails/ButtonHandleUpdateStatus.atom";

function UpdateOrderStatus() {
  const statusRef = useRef(null);

  return (
    <div className="text-gray-600 px-5 sm:px-10 lg:px-16 xl:px-32 2xl:px-64 pb-14">
      <div className="flex flex-col w-4/5">
        <span className="text-gray-600">Update Status:</span>
        <ButtonOpenStatusList statusRef={statusRef} />
        <StatusList statusRef={statusRef} />
      </div>

      <div className="mt-10">
        <ButtonHandleUpdateStatus />
      </div>
    </div>
  );
}

export default UpdateOrderStatus;
