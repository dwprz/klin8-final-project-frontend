import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../lib/redux/register/register.reducer";
import { authService } from "../../../service/auth.service";

function RegisterFragment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateAccount = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const data = {
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      await authService.sendOtp({ email: data.email });

      setIsLoading(false);
      dispatch(userRegister(data));

      navigate("/users/otp/verify");
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return (
    <main className="flex sm:bg-gray-800 min-h-screen">
      <div className="sm:w-1/2 m-9 flex justify-center w-full">
        <section className="w-full flex flex-col text-xs sm:rounded-2xl sm:p-7 sm:w-full md:w-2/3 xl:w-2/3 sm:border-2 sm:bg-white">
          {/* <!-- Register --> */}
          <div>
            <h1 className="font-bold text-lg">Create your account</h1>
          </div>

          <form
            onSubmit={(event) => handleCreateAccount(event)}
            className="flex flex-col gap-4 mt-6"
          >
            <div className="relative">
              <div className="absolute top-0.5 p-2 left-1">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
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

            {error && <p className="text-sm text-red-500 my-5">{error}</p>}

            <div className="mt-7">
              <button
                type="submit"
                disabled={!isLoading ? false : true}
                className="flex justify-center items-center py-2 w-full bg-dark_blue text-white rounded-2xl"
              >
                {!isLoading ? "Create acount" : "Loading..."}
              </button>
            </div>
          </form>

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
    </main>
  );
}

export default RegisterFragment;
