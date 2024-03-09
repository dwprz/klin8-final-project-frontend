const register = (data) => {
  let users = JSON.parse(window.localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.username === data.username);
  if (existingUser) {
    return { status: 400, message: "user already exist" };
  }
  users.push(data);
  window.localStorage.setItem("users", JSON.stringify(users));
  return { status: 200, message: "success register" };
};
const registerService = {
  register,
};
export default registerService;
