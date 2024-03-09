import bcrypt from "bcryptjs";

const register = (data) => {
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
