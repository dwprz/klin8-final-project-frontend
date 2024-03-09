import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleCreateAccount } from "./register.util";

function RegisterFragment() {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: 0,
    message: "",
  });

  return (
    <section className="flex sm:bg-gray-800 min-h-screen">
      <div className="sm:w-1/2 m-9 flex justify-center w-full">
        <section className="w-full flex flex-col text-xs sm:rounded-2xl sm:p-7 sm:w-full md:w-2/3 xl:w-2/3 sm:border-2 sm:bg-white">
          {/* <!-- Register --> */}
          <div>
            <h1 className="font-bold text-lg">Create your account</h1>
          </div>

          <form
            onSubmit={(e) => handleCreateAccount(e, navigate, setError)}
            className="flex flex-col gap-4 mt-6"
          >
            <div className="relative">
              <div className="absolute top-0.5 p-2 left-1">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                name="username"
                required
                placeholder="Enter your username"
                className="border rounded-2xl py-2 w-full ps-8"
              />
            </div>
            <div className="relative">
              <div className="absolute top-0.5 p-2 left-1">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                type="email"
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

            {error.status === 400 ? (
              <p className="text-sm text-red-500 my-5">{error.message}</p>
            ) : (
              ""
            )}

            <div className="mt-7">
              <button
                type="submit"
                className="flex justify-center items-center py-2 w-full bg-dark_blue text-white rounded-2xl"
              >
                Create acount
              </button>
            </div>
          </form>

          {/* <!-- button --> */}
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex items-center">
              <hr className="w-1/2" />
              <p className="text-center text-slate-500">or</p>
              <hr className="w-1/2" />
            </div>

            <div className="relative">
              <button className="flex justify-center items-center py-2 w-full border rounded-2xl">
                Sign in with Google
              </button>
              <div className="absolute p-1 top-0.5 left-1">
                <img src="../../../assets/icons/google.png" alt="google" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="m-auto">
            Have an account?
            <Link to={"/users/login"} className="text-primary hover:underline">
              {" "}
              Sign in here
            </Link>
          </footer>
        </section>
      </div>

      <div className="hidden sm:block sm:w-1/2">
        <img src="/assets/logo/side_login.svg" alt="" className="h-full" />
      </div>
    </section>
  );
}

export default RegisterFragment;
