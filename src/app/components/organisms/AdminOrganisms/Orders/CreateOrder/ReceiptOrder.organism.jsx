import { useSelector } from "react-redux";
import ReceiptDetails from "./ReceiptDetails.organism";
import ButtonsReceiptOrder from "../../../../molecules/AdminMolecules/Orders/CreateOrder/ButtonsReceiptOrder.molecule";

/* eslint-disable react/prop-types */
function ReceiptOrder({ qrcodeCanvasRef }) {
  const { openReceiptSection } = useSelector((state) => state.adminCreateOrder);

  return (
    <section
      className={`${
        openReceiptSection ? "block" : "hidden"
      } pt-24 pb-14 text-gray-600 min-h-screen bg-gray-700 print:bg-white`}
    >
      <div className="pt-10 pb-14 lg:w-3/6 lg:mx-auto lg:border rounded-2xl bg-gray-50">
        <ReceiptDetails />
        <canvas ref={qrcodeCanvasRef} className="w-full mx-auto mt-7"></canvas>
      </div>

      <ButtonsReceiptOrder />
    </section>
  );
}

export default ReceiptOrder;
