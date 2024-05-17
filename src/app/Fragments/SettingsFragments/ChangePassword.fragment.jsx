import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../../service/user.service";

function ChangePasswordFragment() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const passwordInputRef = useRef(null);
  const newPasswordInputRef = useRef(null);
  const navigateToSettingsRef = useRef(null);
  const backPasswordInputRef = useRef(null);
  const navigate = useNavigate();

  const handlePasswordInput = async (event) => {
    event.preventDefault();

    const password = event.target.password.value;
    setPassword(password);

    event.target.password.value = "";

    passwordInputRef.current.classList.toggle("hidden");
    newPasswordInputRef.current.classList.toggle("hidden");

    navigateToSettingsRef.current.classList.toggle("hidden");
    backPasswordInputRef.current.classList.toggle("hidden");
  };

  const handleUpdatePassword = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const newPassword = event.target.newPassword.value;
      await userService.updatePassword({ password, newPassword });

      event.target.newPassword.value = "";

      navigate("/settings");
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-800 pt-[5.5rem] lg:pb-14">
      <div className="sm:w-5/6 xl:w-2/5 lg:min-h-screen lg:border-2 border-gray-600 rounded-xl lg:bg-gray-700 lg:p-7 mx-auto">
        <div>
          {/* Navigate to settings */}
          <i
            ref={navigateToSettingsRef}
            className="fa-solid fa-arrow-left text-primary text-xl py-2 px-5 cursor-pointer"
            onClick={() => navigate("/settings")}
          ></i>

          {/* Back password input */}
          <i
            ref={backPasswordInputRef}
            className="hidden fa-solid fa-arrow-left text-primary text-xl py-2 px-5"
            onClick={() => {
              passwordInputRef.current.classList.toggle("hidden");
              newPasswordInputRef.current.classList.toggle("hidden");

              navigateToSettingsRef.current.classList.toggle("hidden");
              backPasswordInputRef.current.classList.toggle("hidden");
            }}
          ></i>
        </div>
        <div className="pt-7 border-t-2 border-gray-600">
          {/* Password */}
          <form ref={passwordInputRef} onSubmit={handlePasswordInput}>
            <label
              htmlFor="password"
              className="text-neutral-300 flex justify-center"
            >
              Masukkan password anda:
            </label>
            <div className="border-b-2 border-gray-600 pb-1 w-max mx-auto mt-7">
              <input
                name="password"
                type="password"
                minLength={5}
                className="bg-gray-800 lg:bg-gray-700 outline-none text-center text-neutral-300 focus:text-lg"
                placeholder="********"
                required
              />
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="text-neutral-300 px-5 py-1 bg-primary hover:bg-secondary rounded-full"
              >
                Next
              </button>
            </div>
          </form>

          {/* New password */}
          <form
            ref={newPasswordInputRef}
            className="hidden"
            onSubmit={handleUpdatePassword}
          >
            <div>
              <label
                htmlFor="newPassword"
                className="text-neutral-300 flex justify-center"
              >
                Masukkan password baru anda:
              </label>
              <div className="border-b-2 border-gray-600 pb-1 w-max mx-auto mt-7">
                <input
                  name="newPassword"
                  type="password"
                  minLength={5}
                  className="bg-gray-800 lg:bg-gray-700 outline-none text-center text-neutral-300 focus:text-lg"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-center text-red-500 mt-10">{error}</p>
            )}

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="text-neutral-300 px-5 py-1 bg-primary hover:bg-secondary rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangePasswordFragment;
