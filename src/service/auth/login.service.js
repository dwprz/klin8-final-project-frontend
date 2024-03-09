import bcrypt from "bcryptjs";

const login = (data) => {
  let users = JSON.parse(window.localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.username === data.username);
  if (!existingUser) {
    return { status: 400, message: "username or password is incorrect" };
  }

  const isValidPassword = bcrypt.compareSync(
    data.password,
    existingUser.password
  ); // Compare the provided password with the hashed one
  if (!isValidPassword) {
    return { status: 400, message: "username or password is incorrect" };
  }

  window.localStorage.setItem("session", data.username);
  return { status: 200, message: "login success" };
};

const loginService = {
  login,
};

export default loginService;
