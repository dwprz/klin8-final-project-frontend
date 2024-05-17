import axios from "axios";

const createOrder = async (data) => {
  const response = await axios.post("http://localhost:3000/api/orders", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return response.data.data;
};

const getByCurrentUser = async (page) => {
  const response = await axios.get(
    `http://localhost:3000/api/orders/current-user?page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const getOrderById = async (orderId) => {
  const response = await axios.get(
    `http://localhost:3000/api/orders/order-id/${orderId}`
  );

  return response.data.data;
};

export const orderService = {
  createOrder,
  getByCurrentUser,
  getOrderById,
};
