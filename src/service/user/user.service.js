const get = async () => {
  let users = JSON.parse(window.localStorage.getItem("users")) || [];
  const session = window.localStorage.getItem("session");

  if (!session) return;
  const existingUser = users.find((user) => user.username === session);
  if (!existingUser) return;

  return {
    username: existingUser.username,
    email: existingUser.email,
    profile: existingUser.profile,
  };
};

const userService = {
  get,
};

export default userService;
