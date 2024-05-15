import FormCreateOrder from "../../../components/organisms/AdminOrganisms/Orders/CreateOrder/FormCreateOrder.organism";
import ReceiptOrder from "../../../components/organisms/AdminOrganisms/Orders/CreateOrder/ReceiptOrder.organism";
import { useSelector } from "react-redux";
import ButtonGenerateReceiptOrder from "../../../components/atoms/AdminAtoms/Orders/CreateOrder/ButtonGenerateReceiptOrder.atom";
import { useRef } from "react";

function AdminCreateOrderFragment() {
  const { openCreateOrderSection } = useSelector(
    (state) => state.adminCreateOrder
  );

  const qrcodeCanvasRef = useRef(null);

  return (
    <>
      <section
        className={`${
          openCreateOrderSection ? "block" : "hidden"
        } bg-gray-700 min-h-screen text-neutral-300 px-7 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[28rem] py-24`}
      >
        <header className="text-2xl lg:text-3xl font-bold">Create Order</header>
        <FormCreateOrder qrcodeCanvasRef={qrcodeCanvasRef} />
        <ButtonGenerateReceiptOrder />
      </section>

      <ReceiptOrder qrcodeCanvasRef={qrcodeCanvasRef} />
    </>
  );
}

export default AdminCreateOrderFragment;
