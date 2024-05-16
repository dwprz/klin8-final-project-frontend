import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderThunk } from "../../../lib/redux/order/order.action";
import orderDateFormated from "../../../helpers/order-date-formated.helper";
import OrderDetail from "./OrdersDetail.fragment";

function OrderFragment() {
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(1);
  const { currentUserOrders: orders } = useSelector((state) => state.order);

  const orderDetailRef = useRef(null);
  const recentOrderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderThunk.fetchCurrentUserOrders(page));
  }, [dispatch, page]);

  return (
    <section>
      {/* Recent order */}
      <div
        ref={recentOrderRef}
        className="h-max lg:min-h-screen overflow-x-auto px-3 sm:px-10 lg:px-16 xl:px-[20rem] py-24 xl:py-32 bg-gray-800 text-neutral-300"
      >
        <header className="px-5">
          <h1 className="text-xl font-semibold">My Orders</h1>
        </header>

        {/* Tabel orders */}
        <div className="overflow-x-auto px-3 mt-3">
          <table className="w-full text-neutral-300 border-gray-200">
            <thead>
              <tr className="border-b border-neutral-300">
                <th className="px-1 py-2 text-center">No</th>
                <th className="px-1 py-2 text-center">Customer</th>
                <th className="px-1 py-2 text-center">Order Date</th>
                <th className="px-1 py-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs text-center">
              {orders.length &&
                orders.map((order, index) => {
                  const { customerName, createdAt, statuses } = order;

                  const { statusName } = statuses.find(
                    (status) => status.isCurrentStatus
                  );

                  const status = statusName.replace(/_/g, " ");

                  return (
                    <tr
                      key={index}
                      className="even:bg-gray-900 hover:bg-primary"
                      onClick={() => {
                        setOrder(order);
                        orderDetailRef.current.classList.toggle("hidden");
                        recentOrderRef.current.classList.toggle("hidden");
                      }}
                    >
                      <td className="px-1 py-2">{index + 1}</td>
                      <td className="px-1 py-2">
                        {customerName.length <= 15
                          ? customerName
                          : customerName.substring(0, 15) + "..."}
                      </td>
                      <td className="px-1 py-2">
                        {orderDateFormated(createdAt)}
                      </td>
                      <td className="px-1 py-2">{status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {orders.length >= 20 && (
            <div
              className="mt-7 flex justify-center"
              onClick={() => setPage(page + 1)}
            >
              <button className="px-3 py-1 bg-primary hover:bg-secondary rounded-full">
                Show More Orders
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order detail */}
      <section
        ref={orderDetailRef}
        className="hidden bg-white w-full h-full py-14"
      >
        <i
          onClick={() => {
            orderDetailRef.current.classList.toggle("hidden");
            recentOrderRef.current.classList.toggle("hidden");
          }}
          className="fa-regular fa-circle-xmark absolute text-xl lg:text-2xl xl:text-3xl hover:text-secondary text-primary right-7 sm:right-14 xl:right-24 top-24 sm:top-28"
        ></i>
        <OrderDetail order={order} />
      </section>
    </section>
  );
}

export default OrderFragment;