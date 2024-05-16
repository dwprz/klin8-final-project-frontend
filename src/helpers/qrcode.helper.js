import qrcode from "qrcode";
import {
  setError,
  setIsScanStart,
  setOrder,
} from "../lib/redux/qrcode/qrcode.reducer";
import {
  ChecksumException,
  FormatException,
  NotFoundException,
} from "@zxing/library";

const createQrcode = (canvas, orderId) => {
  if (orderId) {
    qrcode.toCanvas(
      canvas,
      orderId.toString(),
      {
        errorCorrectionLevel: "high",
        version: 1,
        width: 250,
        color: {
          dark: "#000", // Warna untuk bagian gelap (hitam)
          light: "#FFF", // Warna untuk bagian terang (putih)
        },
      },
      (error) => {
        if (error) {
          console.log("failed create QRCode");
        }
      }
    );
  }
};

const handleErrorQRCodeScanner = (dispatch, codeReader, error) => {
  dispatch(setIsScanStart(false));
  codeReader.reset();

  if (error instanceof NotFoundException) {
    return dispatch(setError("no qrcode found"));
  }

  if (error instanceof ChecksumException) {
    return dispatch(
      setError("a qrcode was found, but its read value was not valid")
    );
  }

  if (error instanceof FormatException) {
    return dispatch(
      setError("a qrcode was found, but it was in an invalid format")
    );
  }

  return dispatch(setError(error.message));
};

const handleStateAfterSuccessGetOrder = (
  codeReader,
  dispatch,
  order,
  navigate
) => {
  codeReader.reset();
  dispatch(setIsScanStart(false));
  dispatch(setOrder(order));
  dispatch(setError(null));
  navigate("/order/details");
};

const decodeQRCode = async (codeReader, selectedDeviceId) => {
  const result = await codeReader.decodeFromInputVideoDevice(
    selectedDeviceId,
    "video"
  );

  const orderId = Number(result.text);

  if (isNaN(orderId)) {
    throw new Error("qrcode is invalid");
  }

  return orderId;
};

export const qrcodeHelper = {
  createQrcode,
  handleErrorQRCodeScanner,
  handleStateAfterSuccessGetOrder,
  decodeQRCode,
};
