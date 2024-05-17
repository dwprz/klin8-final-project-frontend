import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../service/auth.service";
import userService from "../../../service/user.service";

function ChangeEmailFragment() {
  const [isLoading, setIsLoading] = useState(false);
  const [openPasswordInput, setOpenPasswordInput] = useState(true);
  const [openNewEmailInput, setOpenNewEmailInput] = useState(false);
  const [openOtpInput, setOpenOtpInput] = useState(false);
  const [newEmail, setNewEmail] = useState(null);
  const [error, setError] = useState(null);

  const navigateToSettingsRef = useRef(null);
  const backPasswordInputRef = useRef(null);
  const navigate = useNavigate();

  const handleVerifyPassword = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const password = event.target.password.value;

      await authService.authenticateUser({ password });

      event.target.password.value = "";

      setIsLoading(false);
      setOpenPasswordInput(false);
      setOpenNewEmailInput(true);
      setError(null);

      navigateToSettingsRef.current.classList.toggle("hidden");
      backPasswordInputRef.current.classList.toggle("hidden");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const sendOtp = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const newEmail = event.target.newEmail.value;
      setNewEmail(newEmail);

      await authService.sendOtp({ email: newEmail });

      setOpenNewEmailInput(false);
      setOpenOtpInput(true);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleUpdateEmail = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const otp = event.target.otp.value;

      await userService.updateEmail({ newEmail, otp });

      setError(null);
      setIsLoading(false);
      window.location.href = "/settings";
    } catch (error) {
      setIsLoading(false);
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
              setOpenPasswordInput(true);
              setOpenNewEmailInput(false);

              navigateToSettingsRef.current.classList.toggle("hidden");
              backPasswordInputRef.current.classList.toggle("hidden");
            }}
          ></i>
        </div>
        <div className="pt-7 border-t-2 border-gray-600">
          {/* Verify password */}
          <form
            onSubmit={handleVerifyPassword}
            className={openPasswordInput ? "block" : "hidden"}
          >
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
                className="bg-gray-800 lg:bg-gray-700 outline-none text-center text-neutral-300 focus:text-lg"
                placeholder="********"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-center text-red-500 mt-10">{error}</p>
            )}

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="text-neutral-300 px-5 py-1 bg-primary hover:bg-secondary rounded-full"
              >
                Verify
              </button>
            </div>
          </form>

          {/* New email input */}
          <form
            className={openNewEmailInput ? "block" : "hidden"}
            onSubmit={sendOtp}
          >
            <div>
              <label
                htmlFor="newEmail"
                className="text-neutral-300 flex justify-center"
              >
                Masukkan email baru anda:
              </label>
              <div className="border-b-2 border-gray-600 pb-1 w-max mx-auto mt-7">
                <input
                  name="newEmail"
                  type="email"
                  className="bg-gray-800 lg:bg-gray-700 outline-none text-center text-neutral-300 focus:text-lg"
                  placeholder="new email..."
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
                {isLoading ? "Loading..." : "Next"}
              </button>
            </div>
          </form>

          {/* Veify otp input */}
          <form
            className={openOtpInput ? "block" : "hidden"}
            onSubmit={handleUpdateEmail}
          >
            <div>
              <label
                htmlFor="otp"
                className="text-neutral-300 flex text-center"
              >
                Masukkan otp yang sudah dikirim ke {newEmail || "-"}:
              </label>
              <div className="border-b-2 border-gray-600 pb-1 w-max mx-auto mt-7">
                <input
                  name="otp"
                  type="text"
                  maxLength={6}
                  className="bg-gray-800 lg:bg-gray-700 outline-none text-center text-neutral-300 focus:text-lg"
                  placeholder="enter otp..."
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
                {isLoading ? "Loading..." : "Verify"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangeEmailFragment;
