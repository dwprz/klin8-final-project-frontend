import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ type, image, title, children, link }) {
  switch (type) {
    case "SERVICE_HOME":
      return (
        <figure className="border px-5 sm:px-10 py-7 rounded-2xl shadow-lg bg-gray-100">
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
        <figure className="border p-7 shadow-lg rounded-xl bg-gray-100">
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