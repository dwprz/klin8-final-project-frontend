import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../../service/auth.service";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../lib/firebase/init";
import { AxiosError } from "axios";

function LoginFragment() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      const data = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      const { role } = await authService.login(data);
      role === "ADMIN" ? navigate("/admins/dashboard") : navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { accessToken, displayName, email, photoURL } = result.user;
        if (!accessToken) {
          return setError("failed to login with google");
        }

        const data = {
          fullName: displayName,
          email: email,
          photoProfile: photoURL,
        };

        const { role } = authService.loginGoogle(data);
        role === "ADMIN" ? navigate("/admins/dashboard") : navigate("/");
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          return setError("failed to login with google");
        }

        console.log(error.code, "error code google");
        console.log(error.message, "error message google");
      });
  };

  return (
    <main className="flex sm:bg-gray-800 min-h-screen">
      <div className="sm:w-1/2 m-9 flex justify-center w-full">
        <section className="w-full flex flex-col text-xs sm:rounded-2xl sm:p-7 sm:w-full lg:w-2/3 xl:w-2/3 sm:border-2 sm:bg-white">
          {/*  <!-- welcome --> */}
          <div>
            <h1 className="font-bold text-lg">Login to your account</h1>
            <p className="text-gray-400">Please enter your account!</p>
          </div>
          {/* <!-- form --> */}
          <form
            onSubmit={(event) => handleLogin(event)}
            className="flex flex-col gap-4 mt-6"
          >
            <div className="relative">
              <div className="absolute top-0.5 p-2 left-1">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                name="email"
                required
                placeholder="Enter your email"
                className="border rounded-2xl py-2 w-full ps-8"
              />
            </div>
            <div className="relative">
              <div className="absolute p-2 left-1">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="border rounded-2xl py-2 w-full ps-8"
              />
            </div>

            {error && <p className="text-sm text-red-500 mt-6">{error}</p>}

            <button
              type="submit"
              className="flex justify-center items-center py-2 w-full bg-dark_blue text-white rounded-2xl mt-6"
            >
              Sign in
            </button>
          </form>
          {/* <!-- button --> */}
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex items-center mx-4">
              <hr className="w-1/2" />
              <p className="text-center text-slate-500">or</p>
              <hr className="w-1/2" />
            </div>
            <div className="relative">
              <button
                onClick={() => handleLoginGoogle()}
                className="flex justify-center items-center py-2 w-full border rounded-2xl"
              >
                Sign in with Google
              </button>
              <div className="absolute p-1 top-0.5 left-1">
                <img src="/assets/icons/google.png" alt="google" />
              </div>
            </div>
          </div>
          <div className="flex mt-7 mb-10">
            <a href="../forgot/index.html" className="ml-auto text-blue">
              Forgot password?
            </a>
          </div>
          {/* <!-- footer --> */}
          <footer className="sm:m-auto">
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link to={"/users/register"} className="text-dark_blue">
                Sign up for free
              </Link>
            </p>
          </footer>
        </section>
      </div>
      <div className="hidden sm:block sm:w-1/2">
        <img src="/assets/logo/side_login.svg" alt="" className="h-full" />
      </div>
    </main>
  );
}
export default LoginFragment;
