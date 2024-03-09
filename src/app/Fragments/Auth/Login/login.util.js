import loginService from "../../../../service/auth/login.service";

export const handleSignIn = (event, navigate, setError) => {
  event.preventDefault();

  const data = {
    username: event.target.username.value,
    password: event.target.password.value,
  };

  const res = loginService.login(data);
  res.status === 200
    ? navigate("/")
    : setError({ status: res.status, message: res.message });
};
