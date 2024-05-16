import { SwiperSlide } from "swiper/react";
import SwiperTemplate from "../../../../lib/swiper";

const testimonies = [
  {
    id: 1,
    name: "Agus Matic",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Tidak bisa lebih puas dengan layanan Klin8! Mereka tidak hanya 
              membersihkan sepatu saya dengan baik, tetapi juga memberikan 
              saran yang bermanfaat untuk merawatnya agar tetap terawat. 
              Layanan yang sangat direkomendasikan!`,
  },
  {
    id: 2,
    name: "Slamet Racing",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Saya sangat senang dengan pengalaman menggunakan layanan Klin8. 
              Mereka tidak hanya memperbaiki sepatu saya dengan sangat baik, 
              tetapi juga memberikan pelayanan pelanggan yang ramah. 
              Good job lah!`,
  },
  {
    id: 3,
    name: "Budi Klx",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Wow! Saya sangat terkesan dengan layanan Klin8! Sepatu saya 
              yang terlihat kusam dan kotor kini kembali bersih dan segar 
              seperti baru lagi. Terima kasih Klin8 atas perawatan yang luar 
              biasa!`,
  },
  {
    id: 4,
    name: "Asep Cianjur",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Menggunakan layanan Klin8 adalah keputusan yang sangat baik. 
              Meskipun awalnya saya skeptis, namun ternyata hasilnya sangat bagus,
              sepatu saya kini terlihat seperti baru lagi. Terima kasih, Klin8!`,
  },
];

function Testimoni() {
  return (
    <SwiperTemplate>
      {testimonies.map((testimoni) => {
        const { id, name, profile, comment } = testimoni;

        return (
          <SwiperSlide key={id}>
            <div className="absolute z-20 w-full px-10 sm:px-24 lg:px-64 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <div className="text-neutral-300 flex flex-col gap-7 text-center">
                <i className={profile}></i>
                <h1 className="mt-5">{name}</h1>
                <p className="sm:text-xl">{comment}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperTemplate>
  );
}

export default Testimoni;
