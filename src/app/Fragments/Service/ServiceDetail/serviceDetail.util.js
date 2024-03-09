import { v4 as uuidv4 } from "uuid";
import cartService from "../../../../service/cart/cart.service";

export const handleAddToCart = (
  name,
  shoe,
  quantity,
  price,
  totalPrice,
  setError
) => {
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