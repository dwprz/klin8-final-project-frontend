import { useDispatch } from "react-redux";
import {
  setOpenCreateOrderSection,
  setOpenReceiptSection,
} from "../../../../../../lib/redux/admin/admin-create-order.reducer";

function ButtonsReceiptOrder() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-10 print:hidden">
      <button
        className="px-10 py-2 bg-gray-100 hover:bg-gray-200 text-primary mt-10 rounded-full"
        onClick={() => {
          dispatch(setOpenCreateOrderSection(true));
          dispatch(setOpenReceiptSection(false));
        }}
      >
        Close
      </button>
      <button
        className="px-10 py-2 bg-primary hover:bg-secondary text-neutral-300 mt-10 rounded-full"
        onClick={() => {
          print();
        }}
      >
        Print
      </button>
    </div>
  );
}

export default ButtonsReceiptOrder;
