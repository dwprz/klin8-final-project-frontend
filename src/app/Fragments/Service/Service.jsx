import Card from "../../components/molecules/Card";

function ServiceFragment() {
  return (
    <main>
      <section className="relative w-full h-screen hidden sm:block">
        <section className="absolute z-10 w-full h-full grid grid-cols-2">
          <figure className="h-full bg-gray-800"></figure>

          <figure className="h-full">
            <img
              src="../../assets/hero/hero3.jpg"
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
            <Card
              type={"SERVICE"}
              image={"/assets/icons/brush-svgrepo-com.svg"}
              title={"Cleaning"}
              link={"/service/details/1"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </Card>

            <Card
              type={"SERVICE"}
              image={"/assets/icons/paint-brush-svgrepo-com.svg"}
              title={"Repainting"}
              link={"/service/details/2"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </Card>

            <Card
              type={"SERVICE"}
              image={"/assets/icons/sewing-needle-svgrepo-com.svg"}
              title={"Repair"}
              link={"/service/details/3"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </Card>

            <Card
              type={"SERVICE"}
              image={"/assets/icons/service-desk-svgrepo-com.svg"}
              title={"Consultasy"}
              link={"/service/details/4"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nam? Minus libero natus molestiae tempora.
            </Card>
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
          <figure className="border px-7 pt-5 pb-10">
            <img
              src="../../assets/icons/brush-svgrepo-com.svg"
              alt="klin8 cleaning"
              className="w-20 h-20"
            />
            <figcaption className="mt-3">
              <h2 className="text-xl font-semibold">Cleaning</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </p>
              <div className="mt-7">
                <a
                  href="#"
                  className="bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
                >
                  Selengkapnya
                </a>
              </div>
            </figcaption>
          </figure>

          <figure className="border px-7 pt-5 pb-10">
            <img
              src="../../assets/icons/paint-brush-svgrepo-com.svg"
              alt="klin8 re-painting"
              className="w-20 h-20"
            />
            <figcaption className="mt-3">
              <h2 className="text-xl font-semibold">Re-Painting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </p>
              <div className="mt-7">
                <a
                  href="#"
                  className="bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
                >
                  Selengkapnya
                </a>
              </div>
            </figcaption>
          </figure>

          <figure className="border px-7 pt-5 pb-10">
            <img
              src="../../assets/icons/sewing-needle-svgrepo-com.svg"
              alt="klin8 repair"
              className="w-20 h-20"
            />
            <figcaption className="mt-3">
              <h2 className="text-xl font-semibold">Repair</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </p>
              <div className="mt-7">
                <a
                  href="#"
                  className="bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
                >
                  Selengkapnya
                </a>
              </div>
            </figcaption>
          </figure>

          <figure className="border px-7 pt-5 pb-10">
            <img
              src="../../assets/icons/service-desk-svgrepo-com.svg"
              alt="klin8 consultasy"
              className="w-20 h-20"
            />
            <figcaption className="mt-3">
              <h2 className="text-xl font-semibold">Consultasy</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nam? Minus libero natus molestiae tempora.
              </p>
              <div className="mt-7">
                <a
                  href="#"
                  className="bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
                >
                  Selengkapnya
                </a>
              </div>
            </figcaption>
          </figure>
        </section>
      </section>
    </main>
  );
}

export default ServiceFragment;
