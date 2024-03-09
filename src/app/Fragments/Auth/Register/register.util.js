import registerService from "../../../../service/auth/register.service";

export const handleCreateAccount = (event, navigate, setError) => {
  event.preventDefault();

  const data = {
    username: event.target.username.value,
    email: event.target.email.value,
    password: event.target.password.value,
  };

  const res = registerService.register(data);
  res.status === 200
    ? navigate("/users/login")
    : setError({ status: res.status, message: res.message });
};
