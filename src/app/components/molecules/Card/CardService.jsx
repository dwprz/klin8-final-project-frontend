/* eslint-disable react/prop-types */
function CardService({ name, image, children, onClick }) {
    return (
      <figure className="border border-primary px-7 pt-5 pb-10 bg-gray-800">
        <img
          src={image}
          alt="klin8 service"
          className="w-20 sm:w-14 lg:w-20 h-20 sm:h-14 lg:h-20"
        />
        <figcaption className="mt-3">
          <h2 className="text-xl sm:text-base lg:text-2xl font-semibold">
            {name}
          </h2>
          <p className="sm:text-sm lg:text-base">{children}</p>
          <div className="mt-7">
            <button
              onClick={() => onClick(name)}
              className="sm:text-sm lg:text-base bg-primary hover:bg-secondary px-3 py-2 rounded-lg"
            >
              Selengkapnya
            </button>
          </div>
        </figcaption>
      </figure>
    );
  }
  
  export default CardService;
  
  