import { useState } from "react";

const initCart = [
  {
    id: 1,
    service: "Cleaning",
    name: "Sepatu Hitam",
    price: 100000,
    quantity: 5,
    idUser: 10,
    user: {
      address: "Goatan Street, Northen District, Pantura States",
    },
  },
  {
    id: 2,
    service: "Cleaning",
    name: "Sepatu biru",
    price: 100000,
    quantity: 3,
    idUser: 10,
    user: {
      address: "Goatan Street, Northen District, Pantura States",
    },
  },
  {
    id: 3,
    service: "Cleaning",
    name: "Sepatu putih",
    price: 100000,
    quantity: 2,
    idUser: 10,
    user: {
      address: "Goatan Street, Northen District, Pantura States",
    },
  },
];

function CartFragment() {
  const [cart, setCart] = useState(initCart);

  const handleChangeCart = (index, value) => {
    const updateCart = [...cart];
    updateCart[index].quantity = value;
    setCart(updateCart);
  };

  console.log(cart);

  return (
    <main className="px-5 sm:px-10 lg:px-24 pt-32 pb-14 bg-gray-800">
      <h1 className="flex items-center gap-3 text-2xl text-neutral-100">
        <hr className="w-14 border-t-2 border-primary" />
        Service Cart
      </h1>

      <section className="overflow-x-auto mt-10">
        <table className="w-max xl:w-[80vw] border-collapse border text-neutral-100">
          <thead>
            <tr>
              <th className="p-5 text-left text-base sm:text-xl bg-primary">
                #
              </th>
              <th className="p-5 text-left text-base sm:text-xl bg-primary">
                Service
              </th>
              <th className="p-5 text-left text-base sm:text-xl bg-primary">
                Product
              </th>
              <th className="p-5 text-left text-base sm:text-xl bg-primary">
                Price
              </th>
              <th className="p-5 text-center text-base sm:text-xl bg-primary">
                Quantity
              </th>
              <th className="p-5 text-left text-base sm:text-xl bg-primary">
                Total
              </th>
              <th className="p-5 text-center text-base sm:text-xl bg-primary">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              const { service, name, price, quantity } = item;

              return (
                <tr key={index} className="even:bg-gray-700">
                  <td className="p-5 text-sm sm:text-base text-left">
                    {index + 1}.
                  </td>
                  <td className="p-5 text-sm sm:text-base text-left">
                    {service}
                  </td>
                  <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">
                    {name}
                  </td>
                  <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">
                    {price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="p-5 text-sm sm:text-base text-center">
                    <button
                      className="me-3 px-3 text-sm sm:text-base bg-slate-400 hover:bg-slate-500"
                      onClick={() =>
                        handleChangeCart(
                          index,
                          quantity <= 1 ? 1 : quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="ms-3 px-3 bg-slate-400 hover:bg-slate-500"
                      onClick={() =>
                        handleChangeCart(
                          index,
                          quantity >= 100 ? 100 : quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">
                    {(price * quantity).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="p-5 text-center">
                    <button
                      type="button"
                      className="px-5 py-2 bg-primary hover:bg-secondary hover:shadow-lg rounded-lg"
                      onClick={() => {
                        const deleteCart = [...cart];
                        deleteCart.splice(index, 1);
                        setCart(deleteCart);
                      }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="w-1/2 border-collapse border text-neutral-100 mt-14">
          <thead>
            <tr>
              <th
                colSpan="2"
                className="p-5 text-left text-base sm:text-xl bg-primary"
              >
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-700">
              <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">
                {cart[0].user.address}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-14 flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-28">
        <table className="w-1/2 border-collapse border text-neutral-100">
          <thead>
            <tr>
              <th
                colSpan="2"
                className="p-5 text-left text-base sm:text-xl bg-primary"
              >
                Cart Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-700">
              <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">Sum total</td>
              <td className="p-5 text-sm sm:text-base text-right whitespace-nowrap">
                {cart
                  .map((item) => item.price * item.quantity)
                  .reduce((acc, currentValue) => acc + currentValue, 0)
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <a
            href="#"
            className="bg-primary hover:bg-secondary text-white lg:text-xl px-5 py-2 rounded-lg"
          >
            <i className="fa-solid fa-bag-shopping me-1"></i>
            Checkout
          </a>
        </div>
      </section>
    </main>
  );
}

export default CartFragment;
