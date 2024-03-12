import bcrypt from "bcryptjs";
import validation from "../../lib/zod/validation";
import { userValidate } from "../../lib/zod/user";

const register = (data) => {
  const res = validation(userValidate.register, data);
  if (res.status === 400) return res;

  let users = JSON.parse(window.localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.username === data.username);
  if (existingUser) {
    return { status: 400, message: "username already exists" };
  }

  const hashedPassword = bcrypt.hashSync(data.password, 10); // Hash the password

  const newUser = {
    username: data.username,
    email: data.email,
    password: hashedPassword, // Store the hashed password
  };

  users.push(newUser);
  window.localStorage.setItem("users", JSON.stringify(users));
  return { status: 200, message: "registration successful" };
};

const registerService = {
  register,
};
export default registerService;
