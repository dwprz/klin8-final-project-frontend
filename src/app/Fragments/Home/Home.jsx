import Button from "../../components/atoms/Button";
import Card from "../../components/molecules/Card";
import Testimoni from "../../components/organisems/Testimoni";
import hero from "/assets/hero/hero1.jpg";

function HomeFragment() {
  return (
    <main>
      <section className="relative h-screen">
        <div className="absolute z-20 flex flex-col w-full gap-24 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <header className="text-neutral-100 text-center px-5">
            <h1 className="text-2xl sm:text-4xl xl:text-8xl font-bold">
              Selamat datang di loundry Klin8
            </h1>
            <p className="text-lg sm:text-xl xl:text-3xl mt-2 sm:mt-5 sm:px-14 xl:px-40">
              Kami senang Anda memilih kami untuk merawat sepatu kesayangan
              Anda. Kami siap memberikan layanan terbaik untuk sepatu Anda!
            </p>
          </header>
          <div className="mx-auto lg:text-4xl">
            <Button to={"/service"}>Selengkapnya</Button>
          </div>
        </div>
        <img
          src={hero}
          alt="klin8"
          className="absolute z-10 w-full h-full object-cover brightness-50"
        />
      </section>

      <article className="mt-14 lg:mt-24 text-center px-7">
        <header>
          <h1 className="text-3xl uppercase">Why Klin8 Shoes ?</h1>
          <hr className="border-primary border-[1.5px] w-1/3 mx-auto mt-3" />
        </header>
        <article className="mt-7 sm:px-14 lg:px-40">
          <p>
            Klin8 Shoes hadir untuk menjaga kebersihan dan kualitas sepatu Anda
            dengan teknik cuci canggih. Komitmen kami terhadap lingkungan
            Pantura tercermin dalam bahan pembersih ramah lingkungan, mendukung
            keberlanjutan.
            <strong className="italic">
              &quot;Clean Your Shoes, Preserve Nature&quot;
            </strong>{" "}
            adalah moto kami untuk menjaga alam demi masa depan yang lebih baik.
          </p>
          <p className="mt-5">
            Anda dapat mempercayakan sepatu Anda kepada Klin8 Shoes, yang
            mengutamakan keamanan dan kepercayaan. Layanan antar-jemput kami
            membuat perawatan sepatu anda menjadi lebih mudah dan nyaman, serta
            menghargai waktu dan kenyamanan Anda.
          </p>
        </article>
      </article>

      <section className="flex flex-col lg:flex-row sm:gap-10 mt-14 lg:mt-24 px-7 sm:px-14 lg:px-24">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
          <Card
            type={"POINT"}
            image={"fa-solid fa-headphones"}
            title={"Pelayanan mudah"}
          >
            Kenyamanan di Setiap Langkah. Klin8 Shoes Mengutamakan Pelayanan
            yang Mudah dan Efisien.
          </Card>

          <Card
            type={"POINT"}
            image={"fa-solid fa-wallet"}
            title={"Harga terjangkau"}
          >
            Tetap Stylish tanpa Menguras Kantong! Klin8 Shoes Menawarkan Harga
            yang Terjangkau untuk Semua.
          </Card>
        </div>

        <figure className="sm:px-14">
          <img
            src="./assets/hero/hero5.jpg"
            alt="black shoes nike"
            className="rounded-full p-5 border-2 border-primary my-5 shadow-xl"
          />
        </figure>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
          <Card
            type={"POINT"}
            image={"fa-solid fa-id-card-clip"}
            title={"Teknisi berpengalaman"}
          >
            Percayakan Sepatu Anda pada Ahli! Teknisi Berpengalaman Klin8 Shoes
            Siap Menangani Semua Kebutuhan Perawatan Anda.
          </Card>

          <Card
            type={"POINT"}
            image={"fa-brands fa-pagelines"}
            title={"Bahan alami"}
          >
            Berkomitemen pada Keberlanjutan, Klin8 Shoes Menghadirkan Perawatan
            Sepatu dengan Sentuhan Bahan Alami.
          </Card>
        </div>
      </section>

      <section className="relative mt-14 lg:mt-24">
        <article className="flex flex-col absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
          <header>
            <h1 className="uppercase font-extrabold text-neutral-100 text-3xl sm:text-4xl lg:text-8xl">
              Our Priority
            </h1>
            <hr className="border-[1.5px] border-primary w-1/3 sm:w-2/4 lg:w-2/3 mx-auto mt-3" />
          </header>

          <div className="flex justify-center text-neutral-300 gap-5 lg:gap-14 mt-5 lg:mt-20 sm:mt-10">
            <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
              Quality
            </h2>
            <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
              Pleasure
            </h2>
            <h2 className="border px-3 py-1 rounded-xl sm:text-2xl lg:text-5xl">
              simplicity
            </h2>
          </div>

          <div className="mt-3 sm:mt-7 lg:mt-10 text-neutral-300 sm:text-xl lg:text-3xl">
            <p>
              Your satisfaction and enjoyment is something that is meaningful to
              us
            </p>
          </div>
        </article>
        <img
          src="./assets/hero/hero4.jpg"
          alt="klin8"
          className="w-full z-0 brightness-50"
        />
      </section>

      <section className="mt-14 lg:mt-24 px-10">
        <header className="text-center">
          <h1 className="uppercase text-3xl">Our Service</h1>
          <hr className="border-primary border-[1.5px] w-1/3 mx-auto mt-3" />
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </header>

        <section className="flex flex-col lg:flex-row gap-5 sm:gap-7 mt-10 sm:px-14 lg:px-24">
          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/brush-svgrepo-com.svg"}
            title={"Cleaning"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            quibusdam!
          </Card>

          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/paint-brush-svgrepo-com.svg"}
            title={"Repainting"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            quibusdam!
          </Card>

          <Card
            type={"SERVICE_HOME"}
            image={"./assets/icons/service-desk-svgrepo-com.svg"}
            title={"Consultasy"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            quibusdam!
          </Card>
        </section>

        <div className="flex justify-center lg:mt-14 lg:text-2xl">
          <Button to={"/service"}>Selengkapnya</Button>
        </div>
      </section>

      <Testimoni />
    </main>
  );
}

export default HomeFragment;
