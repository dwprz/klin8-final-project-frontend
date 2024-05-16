import { useEffect, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsScanStart,
  setOrder,
  setSelectedDeviceId,
} from "../../../../lib/redux/qrcode/qrcode.reducer";
import { useNavigate } from "react-router-dom";
import { qrcodeThunk } from "../../../../lib/redux/qrcode/qrcode.action";
import { qrcodeHelper } from "../../../../helpers/qrcode.helper";

function QRCodeScanner() {
  const [codeReader, setCodeReader] = useState(null);
  const { selectedDeviceId, isScanStart, error } = useSelector(
    (state) => state.qrcode
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const initCodeReader = async () => {
      const reader = new BrowserMultiFormatReader();
      setCodeReader(reader);

      try {
        const videoInputDevices = await reader.listVideoInputDevices();
        if (videoInputDevices.length >= 1) {
          dispatch(setSelectedDeviceId(videoInputDevices[0].deviceId));
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
  }, [dispatch]);

  const handleScanButtonClick = async () => {
    try {
      setTimeout(() => {
        dispatch(setIsScanStart(false));
        codeReader.reset();
      }, 10000);

      if (codeReader) {
        dispatch(setIsScanStart(true));

        const orderId = await qrcodeHelper.decodeQRCode(
          codeReader,
          selectedDeviceId
        );

        const order = await dispatch(
          qrcodeThunk.getOrderById(orderId)
        ).unwrap();

        qrcodeHelper.handleStateAfterSuccessGetOrder(
          codeReader,
          dispatch,
          order,
          navigate
        );
      }
    } catch (error) {
      qrcodeHelper.handleErrorQRCodeScanner(dispatch, codeReader, error);
    }
  };

  const handleStopScanButtonClick = () => {
    if (codeReader) {
      dispatch(setIsScanStart(false));
      codeReader.reset();
      dispatch(setOrder(null));
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

        <div
          className={`${
            isScanStart ? "hidden" : "flex"
          } justify-center items-center gap-10 pt-10`}
        >
          <i className="fa-solid fa-camera text-7xl text-neutral-300"></i>
          <i className="fa-solid fa-arrow-right text-5xl text-primary"></i>
          <i className="fa-solid fa-qrcode text-7xl text-neutral-300"></i>
        </div>

        <div
          className={`${isScanStart ? "flex" : "hidden"} justify-center mt-7`}
        >
          <video
            id="video"
            width="300"
            height="200"
            className="border border-primary"
          ></video>
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center mt-10">{error}</p>
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
    </>
  );
}

export default QRCodeScanner;
