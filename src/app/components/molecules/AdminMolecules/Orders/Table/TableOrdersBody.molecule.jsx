import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminOrdersUtil } from "../../../../../../utils/admin-orders.util";
import TableOrdersBodyRow from "../../../../atoms/AdminAtoms/Orders/Table/TableOrdersBodyRow.atom";

function TableOrdersBody() {
  const { orders } = useSelector((state) => state.adminOrders);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    adminOrdersUtil.handleFetchOrders(dispatch, pathname);
  }, [dispatch, pathname]);

  return (
    <tbody className="text-xs text-center">
      {orders.length
        ? orders.map((order, index) => {
            const { customerName, createdAt, statuses } = order;

            const { statusName } = statuses.find(
              (status) => status.isCurrentStatus
            );

            const status = statusName.replace(/_/g, " ");

            return (
              <TableOrdersBodyRow
                key={index}
                index={index}
                order={order}
                customerName={customerName}
                createdAt={createdAt}
                status={status}
              />
            );
          })
        : null}
    </tbody>
  );
}

export default TableOrdersBody;
