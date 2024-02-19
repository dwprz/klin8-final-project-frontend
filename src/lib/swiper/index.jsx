/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function SwiperTemplate({ children }) {
  return (
    <section className="relative h-[70vh] mt-14 lg:mt-24">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {children}
      </Swiper>
      <img
        src="/assets/hero/hero2.jpg"
        alt="klin8"
        className="w-full h-full object-cover brightness-50"
      />
    </section>
  );
}
