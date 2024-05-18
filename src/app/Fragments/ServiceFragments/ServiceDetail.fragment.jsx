/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderService } from "../../../service/order.service";
import { setOPenServiceDetails } from "../../../lib/redux/Service/service.reducer";
import { useNavigate } from "react-router-dom";
import { createOrderHelper } from "../../../helpers/create-order.helper";

function ServiceDetailFragment({ serviceDetailState }) {
  const {
    name: serviceName,
    image,
    summary,
    description,
    price,
  } = serviceDetailState;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [serviceMode, setServiceMode] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { user, isLogin } = useSelector((state) => state.user);

  const { openServiceDetails } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      if (!isLogin) {
        return navigate("/users/login");
      }

      const data = {
        userId: user.userId,
        customerName: user.fullName,
        itemName: event.target.itemName.value,
        serviceName: serviceName.toUpperCase(),
        quantity: quantity,
        totalPrice: totalPrice,
        serviceMode: serviceMode,
        paymentMethod: paymentMethod,
        whatsapp: event.target.whatsapp.value,
        address: event.target.address.value,
      };

      createOrderHelper.processCreateOrderRequest(event, data);

      await orderService.createOrder(data);

      setIsLoading(false);
      setIsSuccess(true);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    let servicePrice;

    switch (serviceMode) {
      case "PICK_UP_ONLY":
        servicePrice = 10000;
        break;
      case "DELIVERY_ONLY":
        servicePrice = 10000;
        break;
      case "PICK_UP_AND_DELIVERY":
        servicePrice = 20000;
        break;
      default:
        servicePrice = 0;
        break;
    }

    setTotalPrice(quantity * price + servicePrice);
  }, [quantity, price, serviceMode]);

  return (
    <main
      className={`${
        openServiceDetails ? "block" : "hidden"
      } relative w-full min-h-screen bg-gray-900`}
    >
      <img
        src={image}
        alt={serviceName}
        className="object-cover h-[80rem] sm:min-h-screen w-full brightness-50"
      />

      <div className="absolute top-1/2 -translate-y-1/2 flex justify-center w-full">
        <div className="relative pt-5 sm:pt-0 sm:px-14 lg:px-24 xl:px-0 xl:w-1/2 text-neutral-100">
          <i
            className="fa-regular fa-circle-xmark absolute -top-2 sm:-top-16 right-10 sm:right-24 xl:right-0 rounded-full text-xl lg:text-2xl text-primary hover:text-secondary z-10 font-bold"
            onClick={() => dispatch(setOPenServiceDetails(false))}
          ></i>

          <h1 className="text-3xl font-semibold px-7 lg:px-0">{serviceName}</h1>
          <p className="text-neutral-200 px-7 lg:px-0">{summary}</p>
          <div className="my-5 px-7 lg:px-0">
            <hr className="border-primary" />
            <p className="my-4 text-neutral-200">{description}</p>
            <hr className="border-primary" />
          </div>

          <form className="px-6 lg:px-0" onSubmit={handleCheckout}>
            {/* Input item name */}
            <input
              type="text"
              name="itemName"
              placeholder="item name"
              className="italic placeholder:text-neutral-100 bg-neutral-200 bg-opacity-50 outline-none px-5 py-1 rounded-full w-5/6 lg:w-3/5"
              maxLength={100}
              minLength={4}
              required
            />

            {/* Total price */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mt-10">
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
                    type="button"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="px-5 bg-primary text-white rounded-lg 
                               transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
                               hover:scale-110 hover:bg-secondary duration-300"
                  >
                    -
                  </button>
                  <p className="text-xl font-semibold">{quantity}</p>
                  <button
                    type="button"
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
              </div>
            </div>

            {/* Service Mode */}
            <div className="mt-5">
              <h1 className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2 sm:mb-0">
                Service Mode:{" "}
                <p className="text-xs italic text-neutral-300">
                  <span className="text-red-500">*</span>
                  Tidak melayani antar jemput luar kota
                </p>
              </h1>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={serviceMode === "PICK_UP_ONLY"}
                  onChange={() => setServiceMode("PICK_UP_ONLY")}
                />
                <label htmlFor="PICK_UP_ONLY">PICK UP ONLY</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={serviceMode === "PICK_UP_ONLY"}
                  onChange={() => setServiceMode("PICK_UP_ONLY")}
                />
                <label htmlFor="PICK_UP_ONLY">DELIVERY ONLY</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={serviceMode === "PICK_UP_AND_DELIVERY"}
                  onChange={() => setServiceMode("PICK_UP_AND_DELIVERY")}
                />
                <label htmlFor="PICK_UP_AND_DELIVERY">
                  PICK UP AND DELIVERY
                </label>
              </div>
            </div>

            {/* Payment method */}
            <div className="mt-5">
              <h1>Payment Method:</h1>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={paymentMethod === "BANK_TRANSFER"}
                  onChange={() => setPaymentMethod("BANK_TRANSFER")}
                />
                <label htmlFor="BANK_TRANSFER">BANK TRANSFER</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={paymentMethod === "E_WALLET"}
                  onChange={() => setPaymentMethod("E_WALLET")}
                />
                <label htmlFor="E_WALLET">E WALLET</label>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="mt-5">
              <label htmlFor="whatsapp">Whatsapp:</label>
              <br />
              <input
                type="text"
                name="whatsapp"
                minLength={9}
                maxLength={15}
                placeholder="08123456789"
                className="italic placeholder:text-neutral-100 bg-neutral-200 bg-opacity-50 outline-none px-5 py-1 rounded-full w-5/6 lg:w-3/5"
                required={serviceMode !== "REGULAR"}
              />
            </div>

            {/* Address */}
            <div className="mt-5">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                type="text"
                name="address"
                maxLength={300}
                placeholder="address..."
                className="italic placeholder:text-neutral-100 bg-neutral-200 bg-opacity-50 outline-none px-5 py-1 rounded-full w-5/6 lg:w-3/5"
                required={serviceMode !== "REGULAR"}
              />
            </div>

            {error && <p className="text-sm text-red-500 mt-7">{error}</p>}
            {isSuccess && (
              <p className="text-sm text-primary mt-7">
                created order successfully
              </p>
            )}

            {/* Button checkout */}
            <button
              type="submit"
              className="text-base px-5 py-1 bg-primary mt-10 rounded-lg 
                         transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
                         hover:scale-110 hover:bg-secondary duration-300"
              disabled={isLoading}
            >
              <i className="fa-solid fa-bag-shopping me-2"></i>
              {!isLoading ? "Checkout" : "Loading..."}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetailFragment;
