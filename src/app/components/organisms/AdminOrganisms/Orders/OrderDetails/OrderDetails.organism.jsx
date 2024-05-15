import { useDispatch, useSelector } from "react-redux";
import {
  setOpenOrderDetails,
  setOrder,
} from "../../../../../../lib/redux/admin/admin-order-details.reducer";
import HeaderOrderDetails from "../../../../molecules/AdminMolecules/Orders/OrderDetails/HeaderOrderDetails.molecule";
import StatusDetails from "../../../../molecules/AdminMolecules/Orders/OrderDetails/StatusDetails.molecule";
import UpdateOrderStatus from "../../../../molecules/AdminMolecules/Orders/OrderDetails/UpdateOrderStatus.molecule";
import OrderDetailsFooter from "../../../../molecules/AdminMolecules/Orders/OrderDetails/OrderDetailsFooter.molecule";

function OrderDetails() {
  const { order, openOrderDetails } = useSelector(
    (state) => state.adminOrderDetails
  );

  const dispatch = useDispatch();

  return (
    <section
      className={`${
        openOrderDetails ? "block" : "hidden"
      } absolute top-0 bottom-0 left-0 bg-white w-full h-full py-10 z-30`}
    >
      <i
        onClick={() => {
          dispatch(setOpenOrderDetails(false));
          dispatch(setOrder(null));
        }}
        className="fa-regular fa-circle-xmark absolute text-xl lg:text-2xl xl:text-3xl hover:text-secondary text-primary right-7 sm:right-14 xl:right-24 top-7 sm:top-10"
      ></i>
      {order && (
        <div className="flex flex-col justify-between h-max bg-white">
          <div className="mt-14 lg:mt-20">
            <HeaderOrderDetails />
            <StatusDetails />
          </div>
          <UpdateOrderStatus />
          <OrderDetailsFooter />
        </div>
      )}
    </section>
  );
}

export default OrderDetails;
