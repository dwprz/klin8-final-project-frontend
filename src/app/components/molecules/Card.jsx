import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ type, image, title, children, link }) {
  switch (type) {
    case "SERVICE_HOME":
      return (
        <figure className="border px-5 sm:px-10 py-7 rounded-xl shadow-lg">
          <img src={image} alt="klin8 cleaning" className="w-52 h-52 mx-auto" />
          <figcaption className="text-center mt-5">
            <h1 className="text-xl font-bold">{title}</h1>
            <hr className="w-1/3 mx-auto border-[1.5px] border-primary mt-2" />
            <p className="mt-5">{children}</p>
          </figcaption>
        </figure>
      );
    case "POINT":
      return (
        <figure className="border p-7 shadow-lg rounded-xl">
          <i className={`${image} text-8xl text-primary`}></i>
          <figcaption className="mt-5">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="mt-2">{children}</p>
          </figcaption>
        </figure>
      );
    case "SERVICE":
      return (
        <figure className="border px-7 pt-5 pb-10 bg-gray-800">
          <img
            src={image}
            alt="klin8 service"
            className="w-20 sm:w-14 lg:w-20 h-20 sm:h-14 lg:h-20"
          />
          <figcaption className="mt-3">
            <h2 className="text-xl sm:text-base lg:text-2xl font-semibold">
              {title}
            </h2>
            <p className="sm:text-sm lg:text-base">
             {children}
            </p>
            <div className="mt-7">
              <Link
                to={link}
                className="sm:text-sm lg:text-base bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
              >
                Selengkapnya
              </Link>
            </div>
          </figcaption>
        </figure>
      );
    default:
      break;
  }
}

export default Card;

/*

      <figure className="border px-7 pt-5 pb-10 bg-gray-800">
              <img
                src="../../assets/icons/brush-svgrepo-com.svg"
                alt="klin8 cleaning"
                className="w-20 sm:w-14 lg:w-20 h-20 sm:h-14 lg:h-20"
              />
              <figcaption className="mt-3">
                <h2 className="text-xl sm:text-base lg:text-2xl font-semibold">
                  Cleaning
                </h2>
                <p className="sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, nam? Minus libero natus molestiae tempora.
                </p>
                <div className="mt-7">
                  <a
                    href="#"
                    className="sm:text-sm lg:text-base bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
                  >
                    Selengkapnya
                  </a>
                </div>
              </figcaption>
            </figure>


  <figure className="border p-7 shadow-lg rounded-xl">
            <i className="fa-solid fa-id-card-clip text-8xl text-primary"></i>
            <figcaption className="mt-5">
              <h1 className="text-xl font-semibold">Teknisi berpengalaman</h1>
              <p className="mt-2">
                Percayakan Sepatu Anda pada Ahli! Teknisi Berpengalaman Klin8
                Shoes Siap Menangani Semua Kebutuhan Perawatan Anda.
              </p>
            </figcaption>
          </figure>


          <figure className="border px-5 sm:px-10 py-7 rounded-xl shadow-lg">
            <img
              src="./assets/icons/brush-svgrepo-com.svg"
              alt="klin8 cleaning"
              className="w-52 h-52 mx-auto"
            />
            <figcaption className="text-center mt-5">
              <h1 className="text-xl font-bold">CLeaning</h1>
              <hr className="w-1/3 mx-auto border-[1.5px] border-primary mt-2" />
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, quibusdam!
              </p>
            </figcaption>
          </figure>
*/
