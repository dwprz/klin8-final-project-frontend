import Button from "../atoms/Button.atom";
import Card from "../molecules/Card.molecule";

function OurService() {
  return (
    <>
      <section className="mt-14 lg:mt-24 px-10">
        <header className="text-center">
          <h1 className="uppercase text-3xl border-b-2 border-primary px-1 w-max mx-auto">Our Service</h1>
          <p className="mt-5">
            Pilih beragam layanan untuk perawatan sepatu anda.
          </p>
        </header>

        <section className="flex flex-col lg:flex-row gap-5 sm:gap-7 mt-10 sm:px-14 lg:px-24">
          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/brush-svgrepo-com.svg"}
            title={"Clean"}
          >
            Percayakan sepatu anda pada layanan clean Klin8 yang akan membawa
            kembali kilau dan kualitas sepatu anda.
          </Card>

          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/paint-brush-svgrepo-com.svg"}
            title={"Repaint"}
          >
            Layanan repaint sepatu profesional, memperbaharui tampilan dan
            kualitas sepatu anda dengan detail terbaik.
          </Card>

          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/service-desk-svgrepo-com.svg"}
            title={"Consultasy"}
          >
            Layanan repair sepatu berkualitas, mengembalikan sepatu anda ke
            keadaan optimal dengan perbaikan terbaik.
          </Card>
        </section>

        <div className="flex justify-center mt-7 lg:mt-14 lg:text-2xl">
          <Button to={"/service"}>Selengkapnya</Button>
        </div>
      </section>
    </>
  );
}

export default OurService;
