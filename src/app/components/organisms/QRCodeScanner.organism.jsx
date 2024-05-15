import { useEffect, useState } from "react";
import StatusProduct from "./StatusProduct.organism";
import { orderService } from "../../../service/order.service";
import {
  BrowserMultiFormatReader,
  ChecksumException,
  FormatException,
  NotFoundException,
} from "@zxing/library";

function QRCodeScanner() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [codeReader, setCodeReader] = useState(null);
  const [isScanStart, setIsScanStart] = useState(false);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const initCodeReader = async () => {
      const reader = new BrowserMultiFormatReader();
      setCodeReader(reader);

      try {
        const videoInputDevices = await reader.listVideoInputDevices();
        if (videoInputDevices.length >= 1) {
          setSelectedDeviceId(videoInputDevices[0].deviceId);
        }
      } catch (error) {
        console.log(error);
      }
    };

    initCodeReader();

    return () => {
      if (codeReader) {
        codeReader.reset();
      }
    };
  }, []);

  const handleScanButtonClick = async () => {
    try {
      setTimeout(() => {
        setIsScanStart(false);
        codeReader.reset();
      }, 15000);

      if (codeReader) {
        setIsScanStart(true);

        const result = await codeReader.decodeFromInputVideoDevice(
          selectedDeviceId,
          "video"
        );

        const orderId = Number(result.text);

        if (isNaN(orderId)) {
          throw new Error("order id is invalid");
        }

        codeReader.reset();
        setIsScanStart(false);

        const order = await orderService.getOrderById(orderId);
        setOrder(order);
      }

    } catch (error) {
      if (error instanceof NotFoundException) {
        console.log("No QR code found.");
      }

      if (error instanceof ChecksumException) {
        console.log("A code was found, but its read value was not valid.");
      }

      if (error instanceof FormatException) {
        console.log("A code was found, but it was in an invalid format.");
      }

      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleStopScanButtonClick = () => {
    if (codeReader) {
      setIsScanStart(false);
      codeReader.reset();
      setOrder(null);
    }
  };

  return (
    <>
      <section className="w-full bg-gray-700 text-center py-14 border-t border-neutral-300">
        <header>
          <h1 className="xl:text-2xl text-xl text-white uppercase">
            Scan QR Code Pesananmu Di Sini!
          </h1>
          <hr className="border-primary border-[1.5px] xl:w-[25rem] w-[22rem] mx-auto mt-3" />
        </header>
        {!isScanStart ? (
          <div className="flex justify-center items-center gap-10 pt-10">
            <i className="fa-solid fa-camera text-7xl text-neutral-300"></i>
            <i className="fa-solid fa-arrow-right text-5xl text-primary"></i>
            <i className="fa-solid fa-qrcode text-7xl text-neutral-300"></i>
          </div>
        ) : (
          <div className="flex justify-center mt-7">
            <video
              id="video"
              width="300"
              height="200"
              className="border border-primary"
            ></video>
          </div>
        )}
        <div>
          {!isScanStart ? (
            <button
              onClick={handleScanButtonClick}
              className="relative bg-primary hover:bg-secondary text-xl text-white ps-12 pe-3 py-2 mt-10 rounded-full"
            >
              <i className="fa-solid fa-camera absolute left-4 top-3"></i>| Scan
            </button>
          ) : (
            <button
              onClick={handleStopScanButtonClick}
              className="relative bg-primary hover:bg-secondary text-xl text-white ps-4 pe-3 py-2 mt-10 rounded-full"
            >
              <i className="fa-regular fa-circle-stop top-3"></i> | Stop
            </button>
          )}
        </div>
      </section>
      <div>
        {order && (
          <StatusProduct order={order} isHidden={false} setOrder={setOrder} />
        )}
      </div>
    </>
  );
}

export default QRCodeScanner;
