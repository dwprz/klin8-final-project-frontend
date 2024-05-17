/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import CreateOrderInputText from "../../../../molecules/AdminMolecules/Orders/CreateOrder/CreateOrderInputText.molecule";
import CreateOrderInputCheckBox from "./CreateOrderInputCheckBox.organism";
import TotalPrice from "./TotalPrice.organism";
import StatusMessage from "./StatusMessage.organis,";
import ButtonCreateOrder from "../../../../atoms/AdminAtoms/Orders/CreateOrder/ButtonCreateOrder.atom";
import { createOrderHelper } from "../../../../../../helpers/create-order.helper";
import { adminService } from "../../../../../../service/admin.service";
import {
  setError,
  setIsLoading,
} from "../../../../../../lib/redux/admin/admin-create-order.reducer";
import { qrcodeHelper } from "../../../../../../helpers/qrcode.helper";

function FormCreateOrder({ qrcodeCanvasRef }) {
  const selector = useSelector((state) => state.adminCreateOrder);
  const dispatch = useDispatch();

  const handleCreateOrder = async (event) => {
    try {
      event.preventDefault();
      setError(null);
      setIsLoading(true);

      const request = createOrderHelper.processCreateOrderRequest(
        event,
        selector
      );

      const result = await adminService.createAdminOrder(request);
      qrcodeHelper.createQrcode(qrcodeCanvasRef.current, result.orderId);

      createOrderHelper.handleStateAfterCreateOrder(event, dispatch, result);
    } catch (error) {
      createOrderHelper.handleCreateOrderError(error, dispatch);
    }
  };

  return (
    <form onSubmit={handleCreateOrder} className="mt-5">
      <div className="flex flex-col gap-3">
        <CreateOrderInputText
          label={"Customer Name"}
          name={"customerName"}
          placeholder={"name..."}
        />

        <CreateOrderInputText
          label={"Item Name"}
          name={"itemName"}
          placeholder={"name..."}
        />
      </div>

      <TotalPrice />

      <CreateOrderInputCheckBox
        title={"Service Name:"}
        names={["CLEAN", "REPAINT", "REPAIR"]}
      />

      <CreateOrderInputCheckBox
        title={"Service Mode:"}
        names={[
          "REGULAR",
          "PICK_UP_ONLY",
          "DELIVERY_ONLY",
          "PICK_UP_AND_DELIVERY",
        ]}
      />

      <CreateOrderInputCheckBox
        title={"Payment Method:"}
        names={["CASH", "BANK_TRANSFER", "E_WALLET"]}
      />

      <div className="mt-5 flex flex-col gap-3">
        <CreateOrderInputText
          label={"Whatsapp"}
          name={"whatsapp"}
          placeholder={"08123456789"}
        />

        <CreateOrderInputText
          label={"Address"}
          name={"address"}
          placeholder={"address..."}
        />
      </div>

      <StatusMessage />

      <ButtonCreateOrder />
    </form>
  );
}

export default FormCreateOrder;
