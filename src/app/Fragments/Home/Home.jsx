import Button from "../../components/atoms/Button";
import Card from "../../components/molecules/Card";
import Description from "../../components/organisems/Desc";
import Hero from "../../components/organisems/Hero";
import OurService from "../../components/organisems/OurService";
import Priority from "../../components/organisems/Priority";
import Testimoni from "../../components/organisems/Testimoni";

function HomeFragment() {
  return (
    <main>
      <Hero/>
      <Description/>
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

      <Priority/>
      <OurService/>
      <Testimoni />
    </main>
  );
}

export default HomeFragment;
