import axios from "axios";

const createAdminOrder = async (data) => {
  const response = await axios.post("http://localhost:3000/api/orders", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return response.data.data;
};

const getAdminOrders = async (page) => {
  const response = await axios.get(
    `http://localhost:3000/api/orders?page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const getOrdersCount = async () => {
  const response = await axios.get("http://localhost:3000/api/orders/count", {
    withCredentials: true,
  });

  return response.data.data;
};

const getOrdersByCustomer = async (customerName, page) => {
  const response = await axios.get(
    `http://localhost:3000/api/orders/customer/${customerName}?page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const getOrdersByStatus = async (status, page) => {
  const response = await axios.get(
    `http://localhost:3000/api/orders/status/${status}?page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const getListUsers = async (role, page) => {
  const response = await axios.get(
    `http://localhost:3000/api/users?role=${role}&page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const getUsersByFullNameAndRole = async (fullName, role, page) => {
  const response = await axios.get(
    `http://localhost:3000/api/users/full-name/${fullName}?role=${role}&page=${page}`,
    {
      withCredentials: true,
    }
  );

  return {
    data: response.data.data,
    paging: response.data.paging,
  };
};

const updateOrderStatus = async ({ orderId, status }) => {
  await axios.patch(
    `http://localhost:3000/api/orders/${orderId}/status`,
    { status },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
};

export const adminService = {
  createAdminOrder,
  getAdminOrders,
  getOrdersCount,
  getOrdersByCustomer,
  getOrdersByStatus,
  getListUsers,
  getUsersByFullNameAndRole,
  updateOrderStatus,
};
