/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ServiceDetailFragment from "./ServiceDetail.fragment";
import CardService from "../../components/molecules/CardService.molecule";
import { useDispatch, useSelector } from "react-redux";
import { setOPenServiceDetails } from "../../../lib/redux/Service/service.reducer";

const Services = [
  {
    name: "Clean",
    image: "/assets/hero/hero-service.jpg",
    summary: "Kebersihan Sepatu Diprioritaskan, Dengan Hasil Yang Baik.",
    description: `Klin8 adalah pilihan terbaik untuk layanan clean 
    sepatu yang ramah lingkungan. Dengan fokus pada kebersihan dan kualitas, 
    kami menggunakan teknologi canggih dan bahan-bahan berkualitas 
    tinggi untuk membersihkan sepatu Anda, menjaga penampilannya 
    tetap segar dan melindungi lingkungan sekitar dengan cara yang 
    bertanggung jawab.`,
    price: 10000,
  },
  {
    name: "Repaint",
    image: "/assets/hero/hero-service.jpg",
    summary: "Repaint sepatu untuk tampilan seperti baru.",
    description: `Klin8 menawarkan layanan repainting sepatu yang 
    mendetail dan berkualitas tinggi. Dengan tim ahli kami, kami 
    mengembalikan warna dan kilau asli sepatu Anda dengan presisi 
    yang bagus. Kami menggunakan cat ramah lingkungan dan teknik 
    terbaru untuk memastikan hasil akhir yang memuaskan. Percayakan 
    Klin8 untuk memberikan tampilan baru yang segar pada sepatu Anda`,
    price: 50000,
  },
  {
    name: "Repair",
    image: "/assets/hero/hero-service.jpg",
    summary: "Solusi perbaikan Profesional untuk sepatu anda.",
    description: `Klin8 adalah pilihan terbaik untuk layanan repair 
    sepatu yang handal dan berkualitas. Dengan tim terampil kami, 
    kami memperbaiki sepatu Anda dengan presisi dan perhatian terhadap 
    detail yang presisi. Dari sol sepatu yang rusak hingga sepatu sobek, 
    kami menangani semua jenis perbaikan dengan keahlian tinggi. 
    Percayakan Klin8 untuk merestorasi sepatu Anda agar kembali dalam 
    kondisi terbaik`,
    price: 70000,
  },
];

function ServiceFragment() {
  const [serviceDetailState, setServiceDetailState] = useState({
    name: "",
    image: "",
    summary: "",
    description: "",
    price: 0,
  });

  const { openServiceDetails } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleButtonMore = (name) => {
    switch (name) {
      case "Clean":
        setServiceDetailState(Services[0]);
        dispatch(setOPenServiceDetails(true));
        break;
      case "Repaint":
        setServiceDetailState(Services[1]);
        dispatch(setOPenServiceDetails(true));
        break;
      case "Repair":
        setServiceDetailState(Services[2]);
        dispatch(setOPenServiceDetails(true));
        break;
      case "Consultasy":
        window.location.href = "https://www.whatsapp.com/download/";
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(setOPenServiceDetails(false));
  }, [dispatch]);

  return (
    <main>
      {/* Service start */}
      <section className={`${openServiceDetails ? "hidden" : "block"}`}>
        <section className="relative w-full min-h-screen hidden sm:block">
          <section className="absolute z-10 w-full h-full grid grid-cols-2">
            <figure className="h-full bg-gray-800"></figure>

            <figure className="h-full bg-gray-800">
              <img
                src="/assets/hero/hero3.jpg"
                alt="klin8 service"
                className="object-cover h-full brightness-50"
              />
            </figure>
          </section>

          <section className="absolute z-20 bg-gray-700 bottom-3 sm:bottom-1/2 xl:bottom-14 sm:translate-y-1/2 xl:translate-y-0 w-[85vw] xl:w-[60vw] h-[80vh] lg:h-[47rem] xl:h-[45rem] hidden sm:block"></section>

          <section className="absolute z-30 h-[80vh] bottom-0  px-5 xl:px-60 pt-5 py-10 text-neutral-300 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-1/2 sm:translate-y-1/2 sm:w-full sm:h-auto">
            <header>
              <h1 className="text-2xl text-primary xl:font-extralight font-semibold flex gap-4 items-center">
                <hr className="w-14 border-t-2 border-gray-500" />
                Service
              </h1>
              <h2 className="text-xl xl:text-4xl 2xl:text-5xl xl:font-bold xl:w-[40vw]">
                Pilih beragam layanan untuk perawatan sepatu anda.
              </h2>
            </header>

            <section className="mt-7 grid grid-cols-2 xl:grid-cols-4 lg:w-full">
              <CardService
                name={"Clean"}
                image={"/assets/icons/brush-svgrepo-com.svg"}
                onClick={() => handleButtonMore("Clean")}
              >
                Percayakan sepatu anda pada layanan cleaning Klin8 yang akan
                membawa kembali kilau dan kualitas sepatu anda.
              </CardService>

              <CardService
                name={"Repaint"}
                image={"/assets/icons/paint-brush-svgrepo-com.svg"}
                onClick={() => handleButtonMore("Repaint")}
              >
                Layanan repainting sepatu profesional, memperbaharui tampilan
                dan kualitas sepatu anda dengan detail terbaik.
              </CardService>

              <CardService
                name={"Repair"}
                image={"/assets/icons/sewing-needle-svgrepo-com.svg"}
                onClick={() => handleButtonMore("Repair")}
              >
                Layanan repair sepatu berkualitas, membuat sepatu anda menjadi
                seperti baru lagi dengan perbaikan yang rapi dan baik.
              </CardService>

              <CardService
                name={"Consultasy"}
                image={"/assets/icons/service-desk-svgrepo-com.svg"}
                onClick={() => handleButtonMore("Consultasy")}
              >
                Layanan consultation sepatu, bantu pilih solusi tepat untuk
                pemeliharaan dan perbaikan sepatu anda di sini.
              </CardService>
            </section>
          </section>
        </section>

        <section className="sm:hidden h-full px-5 pt-32 pb-14 text-neutral-300 bg-gray-800">
          <header>
            <h1 className="text-2xl font-semibold flex gap-4 items-center">
              <hr className="w-14 border-t-2 border-gray-500" />
              Service
            </h1>
            <h2 className="text-xl">
              Pilih beragam layanan untuk perawatan sepatu anda.
            </h2>
          </header>

          <section className="mt-7 flex flex-col">
            <CardService
              name={"Clean"}
              image={"/assets/icons/brush-svgrepo-com.svg"}
              onClick={() => handleButtonMore("Clean")}
            >
              Percayakan sepatu anda pada layanan clean Klin8 yang akan membawa
              kembali kilau dan kualitas sepatu anda.
            </CardService>

            <CardService
              name={"Repaint"}
              image={"/assets/icons/paint-brush-svgrepo-com.svg"}
              onClick={() => handleButtonMore("Repaint")}
            >
              Layanan repaint sepatu profesional, memperbaharui tampilan dan
              kualitas sepatu anda dengan detail terbaik.
            </CardService>

            <CardService
              name={"Repair"}
              image={"/assets/icons/sewing-needle-svgrepo-com.svg"}
              onClick={() => handleButtonMore("Repair")}
            >
              Layanan repair sepatu berkualitas, membuat sepatu anda menjadi
              seperti baru lagi dengan perbaikan terbaik.
            </CardService>

            <CardService
              name={"Consultasy"}
              image={"/assets/icons/service-desk-svgrepo-com.svg"}
              onClick={() => handleButtonMore("Consultasy")}
            >
              Layanan consultation sepatu, bantu pilih solusi tepat untuk
              pemeliharaan dan perbaikan sepatu anda di sini.
            </CardService>
          </section>
        </section>
      </section>
      {/* Service end */}

      {/* Service detail */}
      <ServiceDetailFragment serviceDetailState={serviceDetailState} />
    </main>
  );
}

export default ServiceFragment;
