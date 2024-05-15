import { useDispatch, useSelector } from "react-redux";
import SetQuantity from "../../../../molecules/AdminMolecules/Orders/CreateOrder/SetQuantity.molecule";
import { useEffect } from "react";
import calculatePrice from "../../../../../../helpers/calculate-price.helper";
import { setTotalPrice } from "../../../../../../lib/redux/admin/admin-create-order.reducer";

function TotalPrice() {
  const { totalPrice, serviceName, serviceMode, quantity } = useSelector(
    (state) => state.adminCreateOrder
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    const totalPrice = calculatePrice(serviceName, serviceMode, quantity);
    dispatch(setTotalPrice(totalPrice));
  }, [dispatch, serviceName, serviceMode, quantity]);

  return (
    <div className="flex flex-col w-3/4 sm:w-3/5 xl:w-2/5 mt-5">
      <h2>Quantity:</h2>
      <SetQuantity />

      <p className="mt-5">
        Total Price:{" "}
        {totalPrice.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>
    </div>
  );
}

export default TotalPrice;
