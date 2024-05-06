import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunk } from "../../lib/redux/user/user.action";
import {
  deleteCartItem,
  fetchCartUser,
} from "../../lib/redux/cart/cart.action";
import {
  addQuantity,
  decreaseQuantity,
  updateTotalSUm,
} from "../../lib/redux/cart/cart.reducer";

function CartFragment() {
  const { cart, totalSum } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {
    user: { username, address },
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userThunk.fetchUserData());
    dispatch(fetchCartUser(username));
  }, [username, dispatch]);

  useEffect(() => {
    dispatch(updateTotalSUm(cart));
  }, [cart, dispatch]);

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
            {cart &&
              cart.map((item, index) => {
                const { id, service, name, price, quantity } = item;

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
                        onClick={() => dispatch(decreaseQuantity(id))}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="ms-3 px-3 bg-slate-400 hover:bg-slate-500"
                        onClick={() => dispatch(addQuantity(id))}
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
                        onClick={() => dispatch(deleteCartItem(id))}
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
                <input
                  type="text"
                  className="bg-gray-700 placeholder:italic px-5 py-2 outline-none"
                  placeholder="your address"
                  required
                  maxLength={250}
                  minLength={4}
                  defaultValue={address}
                />
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
              <td className="p-5 text-sm sm:text-base text-left whitespace-nowrap">
                Sum total
              </td>
              <td className="p-5 text-sm sm:text-base text-right whitespace-nowrap">
                {totalSum.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button className="bg-primary hover:bg-secondary text-white lg:text-xl px-5 py-2 rounded-lg">
            <i className="fa-solid fa-bag-shopping me-1"></i>
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}

export default CartFragment;
