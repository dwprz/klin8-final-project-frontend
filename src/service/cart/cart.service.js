const add = (data) => {
  const session = window.localStorage.getItem("session");
  if (!session) {
    window.location.href = "/users/login";
    return;
  }

  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  const existingCart = cart.find(
    (item) => item.service === data.service && item.name === data.name
  );

  if (existingCart) return;

  data.username = session;
  cart.push(data);
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

const get = async (username) => {
  const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  const cartUser = cart.filter((item) => item.username === username);

  return cartUser || [];
};

const remove = async (id) => {
  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== id);
  window.localStorage.setItem("cart", JSON.stringify(cart));

  return cart || [];
};

const cartService = {
  add,
  get,
  remove,
};

export default cartService;
