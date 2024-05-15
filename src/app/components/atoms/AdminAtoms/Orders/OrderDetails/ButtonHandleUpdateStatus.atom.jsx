import { useDispatch, useSelector } from "react-redux";
import { adminService } from "../../../../../../service/admin.service";
import { setIsLoading } from "../../../../../../lib/redux/admin/admin-order-details.reducer";

function ButtonHandleUpdateStatus() {
  const { order, isLoading, updateStatus, updateStatusId, currentStatusId } =
    useSelector((state) => state.adminOrderDetails);

  const dispatch = useDispatch();

  const handleUpdateStatus = async () => {
    try {
      if (updateStatus && currentStatusId < updateStatusId) {
        dispatch(setIsLoading(true));

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
    <button
      disabled={isLoading}
      className="px-5 py-1 bg-primary hover:bg-secondary rounded-full text-neutral-100 text-lg"
      onClick={handleUpdateStatus}
    >
      {isLoading ? "Loading..." : "Save"}
    </button>
  );
}

export default ButtonHandleUpdateStatus;
