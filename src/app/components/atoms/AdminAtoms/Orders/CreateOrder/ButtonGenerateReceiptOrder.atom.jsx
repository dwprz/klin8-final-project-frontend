import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCreateOrderSection,
  setOpenReceiptSection,
} from "../../../../../../lib/redux/admin/admin-create-order.reducer";

function ButtonGenerateReceiptOrder() {
  const { isSuccess } = useSelector((state) => state.adminCreateOrder);
  const dispatch = useDispatch();

  return (
    isSuccess && (
      <div className="mt-10">
        <button
          type="button"
          className="px-3 py-1 bg-primary rounded-full"
          onClick={() => {
            dispatch(setOpenCreateOrderSection(false));
            dispatch(setOpenReceiptSection(true));
          }}
        >
          Generate Receipt
        </button>
      </div>
    )
  );
}

export default ButtonGenerateReceiptOrder;
