import bcrypt from "bcryptjs";
import validation from "../../lib/zod/validation";
import { userValidate } from "../../lib/zod/user";

const get = async () => {
  let users = JSON.parse(window.localStorage.getItem("users")) || [];
  const session = window.localStorage.getItem("session");
  if (!session) return;
  
  const res = validation(userValidate.session, session);
  if (res.status === 400) return;

  const existingUser = users.find((user) => user.username === session);
  if (!existingUser) return;

  return {
    username: existingUser.username,
    email: existingUser.email,
    profile: existingUser.profile,
    address: existingUser.address,
    postal_code: existingUser.postal_code,
  };
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
