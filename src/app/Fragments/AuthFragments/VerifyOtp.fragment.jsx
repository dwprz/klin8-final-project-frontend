import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../service/auth.service";

function VerifyOtpFragment() {
  const { user } = useSelector((state) => state.register);
  const inputOtpRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [succeessVerifyOtp, setSuccessVerifyOtp] = useState(false);

  const { email } = user;

  const handleVerifyOtp = async () => {
    try {
      const otp = inputOtpRef.current.value;
      if (isNaN(parseInt(otp))) {
        return setError("otp must be a number");
      }

      setError(null);
      const { email } = user;

      await authService.verifyOtp({ email, otp });
      await authService.register(user);

      setSuccessVerifyOtp(true);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <main>
      {/* Verify otp */}
      <div
        className={`${
          succeessVerifyOtp ? "hidden" : "flex"
        } flex-col items-center justify-center min-h-screen bg-gray-700 text-neutral-300 px-7`}
      >
        <h1 className="text-center">
          Masukkan kode OTP yang kami kirim ke:{" "}
          <span className="border-b border-primary px-1 italic text-sm">
            {email || "-"}
          </span>
        </h1>
        <input
          ref={inputOtpRef}
          type="text"
          maxLength={6}
          className="border px-3 py-1 rounded-lg text-center text-gray-600 outline-primary mt-5"
          placeholder="******"
        />

        <p className="text-sm text-red-500 mt-5">{error && error}</p>

        <button
          className="px-3 py-1 bg-primary hover:bg-secondary rounded-lg mt-7"
          onClick={handleVerifyOtp}
        >
          Verify
        </button>
      </div>

      {/* Success verify otp */}
      <div
        className={`${
          succeessVerifyOtp ? "flex" : "hidden"
        } flex flex-col items-center justify-center min-h-screen bg-gray-700 text-neutral-300 text-center px-7`}
      >
        <h1>Verified Otp sucessfully!</h1>
        <p>Do you want to be redirected to the login page?</p>
        <button
          className="px-3 py-1 bg-primary hover:bg-secondary rounded-lg mt-7"
          onClick={() => navigate("/users/login")}
        >
          OK
        </button>
      </div>
    </main>
  );
}

export default VerifyOtpFragment;
