import qrcode from "qrcode";

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
          console.log(error);
          console.log("failed create QRCode");
        }
      }
    );
  }
};

export default createQrcode;
