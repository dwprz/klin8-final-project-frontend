/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cartService from "../../../service/cart.service";

function ServiceDetailFragment({ serviceDetailState }) {
  const { hidden, name, image, summary, description, price } =
    serviceDetailState;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [shoe, setShoe] = useState("");
  const [error, setError] = useState({});

  const handleAddToCart = () => {
    if (!shoe) {
      setError({ status: 400, message: "shoe name is mandatory" });
      return;
    }

    const data = {
      id: uuidv4(),
      service: name,
      name: shoe,
      quantity: quantity,
      price: price,
      totalPrice: totalPrice,
    };
    cartService.add(data);
    setError({ status: 200, message: "success add cart" });
  };

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  return (
    <main className={`${!hidden ? "block" : "hidden"} relative w-full min-h-screen`}>
      <img
        src={image}
        alt={name}
        className="object-cover h-full w-full brightness-50"
      />

      <div className="absolute top-1/2 -translate-y-1/2 flex justify-center w-full">
        <div className="px-7 sm:px-14 lg:px-24 xl:px-0 xl:w-1/2 text-neutral-100">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-neutral-200">{summary}</p>
          <div className="my-5">
            <hr className="border-primary" />
            <p className="my-4 text-neutral-200">{description}</p>
            <hr className="border-primary" />
          </div>

          <input
            type="text"
            name="shoe"
            placeholder="shoe name"
            value={shoe}
            onChange={(e) => setShoe(e.target.value)}
            className="italic placeholder:text-neutral-100 bg-neutral-200 bg-opacity-50 outline-none px-5 py-1 rounded-full"
            maxLength={100}
            minLength={4}
            required
          />

          <p className="text-sm text-red-500 mt-3">
            {error.status === 400 ? error.message : ""}
          </p>

          <div className="flex flex-col xl:flex-row xl:items-center justify-between mt-7">
            <div className="flex gap-2 items-center">
              <p
                className={`${
                  totalPrice === price
                    ? "ps-3 xl:ps-4 scale-125 xl:scale-150 duration-700"
                    : "xl:ps-3 scale-95 xl:scale-125 text-neutral-300 duration-700"
                }`}
              >
                {price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <span
                className={`${
                  totalPrice === price
                    ? "hidden duration-700"
                    : "block ps-2 xl:ps-8 scale-125 xl:scale-150 duration-700"
                }`}
              >
                {totalPrice === price
                  ? ""
                  : "| " +
                    totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between mt-5 xl:mt-0">
              <div className="flex gap-3">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-5 bg-primary text-white rounded-lg 
              transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
              hover:scale-110 hover:bg-secondary duration-300"
                >
                  -
                </button>
                <p className="text-xl font-semibold">{quantity}</p>
                <button
                  onClick={() =>
                    setQuantity(quantity < 100 ? quantity + 1 : 100)
                  }
                  className="px-5 bg-primary text-white rounded-lg 
              transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
              hover:scale-110 hover:bg-secondary duration-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="xl:hidden px-5 py-1 bg-primary xl:mt-7 rounded-lg 
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300"
              >
                <i className="fa-solid fa-bag-shopping me-2"></i>
                Add To Cart
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="hidden xl:block text-2xl xl:text-base px-5 py-1 bg-primary xl:mt-7 rounded-lg 
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300"
          >
            <i className="fa-solid fa-bag-shopping me-2"></i>
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetailFragment;
