import { useState } from "react";
import userService from "../../../service/user.service";

/* eslint-disable react/prop-types */
function FormPassword({ updateRequest }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendPassword = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const password = event.target.password.value;
      await userService.update({ ...updateRequest, password });

      setIsLoading(false);
      window.location.href = "/settings/profile";
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <section className="pt-7 border-t-2 border-gray-600">
      <h1 className="text-neutral-300 text-center">Masukkan Password anda:</h1>
      <form className="mt-7" onSubmit={handleSendPassword}>
        <div className="border-b-2 border-gray-600 pb-1 w-max mx-auto">
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
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormPassword;
