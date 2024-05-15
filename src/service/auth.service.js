import axios from "axios";

const login = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/users/login",
    data,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  return response.data.data;
};

const loginGoogle = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/api/users/login-google",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );

  return response.data.data;
};

const sendOtp = async (data) => {
  await axios.post("http://localhost:3000/api/users/otp", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const verifyOtp = async (data) => {
  await axios.post("http://localhost:3000/api/users/otp/verify", data, {
    headers: { "Content-Type": "application/json" },
  });
};

const register = async (data) => {
  await axios.post("http://localhost:3000/api/users/register", data, {
    headers: { "Content-Type": "application/json" },
  });
};

const logout = async () => {
  await axios.patch("http://localhost:3000/api/users/logout", null, {
    withCredentials: true,
  });
};

const refreshToken = async () => {
  const response = await axios.post(
    "http://localhost:3000/api/users/refresh-token",
    null,
    {
      withCredentials: true,
    }
  );

  return response.data.data;
};

const authenticateUser = async (data) => {
  await axios.post("http://localhost:3000/api/users/authenticate", data, {
    headers: {
      "Content-Type": "application/json",
    },

    withCredentials: true,
  });
};

export const authService = {
  login,
  loginGoogle,
  sendOtp,
  verifyOtp,
  register,
  logout,
  refreshToken,
  authenticateUser,
};
