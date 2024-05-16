import axios from "axios";
import { authService } from "./auth.service";

const get = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/users/current",
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  } catch (error) {
    const result = await authService.refreshToken();
    return result;
  }
};

const update = async (data) => {
  const response = await axios.patch(
    "http://localhost:3000/api/users/current",
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

const updatePassword = async (data) => {
  await axios.patch("http://localhost:3000/api/users/current/password", data, {
    headers: {
      "Content-Type": "application/json",
    },

    withCredentials: true,
  });
};

const updateEmail = async (data) => {
  const response = await axios.patch(
    "http://localhost:3000/api/users/current/email",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    }
  );

  response.data.data;
};

const updatePhotoProfile = async (data) => {
  await axios.patch(
    "http://localhost:3000/api/users/current/photo-profile",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      withCredentials: true,
    }
  );
};

const userService = {
  get,
  update,
  updatePassword,
  updateEmail,
  updatePhotoProfile,
};

export default userService;
