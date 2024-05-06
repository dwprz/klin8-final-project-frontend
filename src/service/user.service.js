import bcrypt from "bcryptjs";
import validation from "../lib/zod/validation";
import { userValidate } from "../lib/zod/user";
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
  const res = validation(userValidate.update, data);
  if (res.status === 400) return;

  let users = JSON.parse(window.localStorage.getItem("users"));

  users = await Promise.all(
    users.map(async (user) => {
      const password =
        data.password !== "" ? await bcrypt.hash(data.password, 10) : null;
      const address = data.address !== "" ? data.address : null;
      const postal_code = data.postal_code !== "" ? data.postal_code : null;

      return user.username === data.username
        ? { ...user, password, address, postal_code }
        : user;
    })
  );

  window.localStorage.setItem("users", JSON.stringify(users));
};

const userService = {
  get,
  update,
};

export default userService;
