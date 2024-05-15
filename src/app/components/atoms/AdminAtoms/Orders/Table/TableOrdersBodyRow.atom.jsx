/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import orderDateFormated from "../../../../../../helpers/order-date-formated.helper";
import {
  setOpenOrderDetails,
  setOrder,
} from "../../../../../../lib/redux/admin/admin-order-details.reducer";

function TableOrdersBodyRow({ index, order, customerName, createdAt, status }) {
  const dispatch = useDispatch();
  return (
    <tr
      className="even:bg-gray-800 hover:bg-primary"
      onClick={() => {
        dispatch(setOrder(order));
        dispatch(setOpenOrderDetails(true));
      }}
    >
      <td className="px-1 py-2">{index + 1}</td>
      <td className="px-1 py-2">
        {customerName.length <= 15
          ? customerName
          : customerName.substring(0, 15) + "..."}
      </td>
      <td className="px-1 py-2">{orderDateFormated(createdAt)}</td>
      <td className="px-1 py-2">{status}</td>
    </tr>
  );
}

export default TableOrdersBodyRow;
