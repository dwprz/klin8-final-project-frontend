import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import loginService from "../../../../service/auth/login.service";
import auth from "../../../../lib/firebase/init";

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

export const handleLoginGoogle = (setError) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const { accessToken, displayName, email, photoURL } = result.user;
      if (!accessToken) {
        setError({ status: 400, message: "failed to login with google" });
        return;
      }

      const data = {
        username: displayName,
        email: email,
        profile: photoURL,
      };

      const res = registerGoogle(data);
      res.status === 200
        ? (window.location.href = "/")
        : setError({ status: 400, message: res.message });
    })
    .catch((error) => {
      console.log(error.code, "error code google");
      console.log(error.message, "error message google");
    });
};

const registerGoogle = (data) => {
  let users = JSON.parse(window.localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.username === data.username);

  if (existingUser) {
    users = users.map((user) =>
      user.username === data.username
        ? { ...user, email: data.email, profile: data.profile }
        : user
    );
  } else {
    users.push(data);
  }

  window.localStorage.setItem("users", JSON.stringify(users));
  window.localStorage.setItem("session", data.username);
  return { status: 200, message: "success login with google" };
};
