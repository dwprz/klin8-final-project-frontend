import { SwiperSlide } from "swiper/react";
import SwiperTemplate from "../../../../lib/swiper";

const testimonies = [
  {
    id: 1,
    name: "Agus Matic",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore architecto aliquid voluptates maiores exercitationem
              veritatis iste praesentium mollitia quo veniam?`,
  },
  {
    id: 2,
    name: "Slamet Kopleng",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore architecto aliquid voluptates maiores exercitationem
              veritatis iste praesentium mollitia quo veniam?`,
  },
  {
    id: 3,
    name: "Budi Klx",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore architecto aliquid voluptates maiores exercitationem
              veritatis iste praesentium mollitia quo veniam?`,
  },
  {
    id: 4,
    name: "Asep Cianjur",
    profile: "fa-solid fa-circle-user text-8xl",
    comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore architecto aliquid voluptates maiores exercitationem
              veritatis iste praesentium mollitia quo veniam?`,
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


