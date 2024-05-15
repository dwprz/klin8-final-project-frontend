import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../../../../../../lib/redux/admin/admin-create-order.reducer";

function SetQuantity() {
  const { quantity } = useSelector((state) => state.adminCreateOrder);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 items-center mt-3">
      <button
        type="button"
        className="px-2 bg-primary"
        onClick={() => dispatch(setQuantity(quantity > 1 ? quantity - 1 : 1))}
      >
        -
      </button>
      {quantity}
      <button
        type="button"
        className="px-2 bg-primary"
        onClick={() =>
          dispatch(setQuantity(quantity <= 100 ? quantity + 1 : 100))
        }
      >
        +
      </button>
    </div>
  );
}

export default SetQuantity;
