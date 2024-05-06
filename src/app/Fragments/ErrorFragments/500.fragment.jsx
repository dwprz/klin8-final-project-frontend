import { Link } from "react-router-dom";

function Error500Fragment() {
  return (
    <main>
      <figure className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
        <img src="/assets/error/500.svg" alt="" className="sm:h-[70vh]" />
        <figcaption className="text-center mt-5">
          <Link
            to="/"
            className="bg-primary hover:bg-secondary px-3 lg:px-5 py-1 lg:py-2 rounded-full text-white lg:text-2xl"
          >
            Back To home
          </Link>
        </figcaption>
      </figure>
    </main>
  );
}

export default Error500Fragment;