/* eslint-disable no-unused-vars */
import { useState } from "react";
import ServiceDetailFragment from "./ServiceDetail/ServiceDetail";
import CardService from "../../components/molecules/Card/CardService";

const Services = [
  {
    hidden: false,
    name: "Cleaning",
    image: "/assets/hero/hero-service.jpg",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
    hic sunt corrupti ex at unde facere omnis officiis illo laborum
    ad, et excepturi voluptate ducimus labore iste assumenda natus,
    nostrum sapiente distinctio quo eaque quidem ipsa. Molestias iure,
    illum unde deserunt perferendis ab dolorum, vero commodi quam
    consequatur sunt. Cupiditate?`,
    price: 20000,
  },
  {
    hidden: false,
    name: "Repainting",
    image: "/assets/hero/hero-service.jpg",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
    hic sunt corrupti ex at unde facere omnis officiis illo laborum
    ad, et excepturi voluptate ducimus labore iste assumenda natus,
    nostrum sapiente distinctio quo eaque quidem ipsa. Molestias iure,
    illum unde deserunt perferendis ab dolorum, vero commodi quam
    consequatur sunt. Cupiditate?`,
    price: 20000,
  },
  {
    hidden: false,
    name: "Repair",
    image: "/assets/hero/hero-service.jpg",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
    hic sunt corrupti ex at unde facere omnis officiis illo laborum
    ad, et excepturi voluptate ducimus labore iste assumenda natus,
    nostrum sapiente distinctio quo eaque quidem ipsa. Molestias iure,
    illum unde deserunt perferendis ab dolorum, vero commodi quam
    consequatur sunt. Cupiditate?`,
    price: 20000,
  },
];

function ServiceFragment() {
  const [serviceDetailState, setServiceDetailState] = useState({
    hidden: true,
    name: "",
    image: "",
    summary: "",
    description: "",
    price: 0,
  });

  const handleButtonMore = (name) => {
    switch (name) {
      case "Cleaning":
        setServiceDetailState(Services[0]);
        break;
      case "Repainting":
        setServiceDetailState(Services[1]);
        break;
      case "Repair":
        setServiceDetailState(Services[2]);
        break;
      case "Consultasy":
        window.location.href = "https://www.whatsapp.com/download/";
        break;
      default:
        break;
    }
  };

  return (
    <main>
      {/* Service start */}
      <section className={`${!serviceDetailState.hidden ? "hidden" : "block"}`}>
        <section className="relative w-full h-screen hidden sm:block">
          <section className="absolute z-10 w-full h-full grid grid-cols-2">
            <figure className="h-full bg-gray-800"></figure>

            <figure className="h-full">
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
              <h2 className="text-xl xl:text-5xl xl:font-bold xl:w-[40vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </header>

            <section className="mt-7 grid grid-cols-2 xl:grid-cols-4 lg:w-full">
              <CardService
                name={"Cleaning"}
                image={"/assets/icons/brush-svgrepo-com.svg"}
                onClick={handleButtonMore}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </CardService>

              <CardService
                name={"Repainting"}
                image={"/assets/icons/paint-brush-svgrepo-com.svg"}
                onClick={handleButtonMore}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </CardService>

              <CardService
                name={"Repair"}
                image={"/assets/icons/sewing-needle-svgrepo-com.svg"}
                onClick={handleButtonMore}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </CardService>

              <CardService
                name={"Consultasy"}
                image={"/assets/icons/service-desk-svgrepo-com.svg"}
                onClick={handleButtonMore}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
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
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </header>

          <section className="mt-7 flex flex-col">
            <CardService
              name={"Cleaning"}
              image={"/assets/icons/brush-svgrepo-com.svg"}
              onClick={handleButtonMore}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </CardService>

            <CardService
              name={"Repainting"}
              image={"/assets/icons/paint-brush-svgrepo-com.svg"}
              onClick={handleButtonMore}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </CardService>

            <CardService
              name={"Repair"}
              image={"/assets/icons/sewing-needle-svgrepo-com.svg"}
              onClick={handleButtonMore}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </CardService>

            <CardService
              name={"Consultasy"}
              image={"/assets/icons/service-desk-svgrepo-com.svg"}
              onClick={handleButtonMore}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
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
