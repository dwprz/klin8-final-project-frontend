import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../../service/user.service";
import { useSelector } from "react-redux";

function SettingsFragment() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);

  const updatePhotoProfile = async (event) => {
    try {
      setIsLoading(true);
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("photoProfile", file);

      await userService.updatePhotoProfile(formData);

      // location.reload();
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return (
    <section className="bg-gray-800 h-max lg:min-h-screen pt-[5.5rem] sm:pb-14">
      <div className="sm:w-5/6 xl:w-2/5 min-h-screen mx-auto sm:bg-gray-700 sm:border-2 border-gray-600 rounded-xl px-5 sm:px-7 sm:py-7">
        <div className="py-2" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house text-xl text-primary hover:text-secondary"></i>
        </div>
        <div className="border-t-2 border-gray-500 pt-5">
          <h1 className="text-xl text-neutral-300 font-semibold">Settings</h1>
          {/* Photo profile */}
          <div className="relative w-max mx-auto my-10">
            {user.photoProfile ? (
              <img
                src={user.photoProfile}
                alt="photoProfile"
                className="w-[7rem] h-[7rem] object-cover rounded-full"
              />
            ) : (
              <i className="fa-solid fa-user px-5 py-4 bg-neutral-300 text-6xl rounded-full"></i>
            )}

            <form
              encType="multipart/form-data"
              className="absolute -right-3 bottom-0 px-2 py-1 bg-primary rounded-full border-[5px] border-gray-700"
            >
              <label htmlFor="photoProfile">
                <i className="fa-solid fa-pen text-neutral-300"></i>
              </label>
              <input
                id="photoProfile"
                name="photoProfile"
                type="file"
                accept=".jpg, .jpeg, .png, .svg, .webp"
                className="hidden"
                onChange={updatePhotoProfile}
                disabled={isLoading}
              />
            </form>
          </div>

          {error && (
            <p className="text-sm text-center text-red-500 my-10">{error}</p>
          )}

          {/* Account */}
          <div>
            <div className="border-b border-gray-500">
              <i className="fa-solid fa-user-pen text-lg text-primary me-2"></i>
              <span className="text-neutral-300 font-semibold">Account</span>
            </div>

            <ul className="text-neutral-300 mt-5 flex flex-col gap-4">
              <li
                className="flex items-center justify-between"
                onClick={() => navigate("/settings/profile")}
              >
                <span>Profile settings</span>
                <i className="fa-solid fa-angle-right text-lg"></i>
              </li>
              <li
                className="flex items-center justify-between"
                onClick={() => navigate("/settings/password")}
              >
                <span>Change password</span>
                <i className="fa-solid fa-angle-right text-lg"></i>
              </li>
              <li
                className="flex items-center justify-between"
                onClick={() => navigate("/settings/email")}
              >
                <span>Change Email</span>
                <i className="fa-solid fa-angle-right text-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SettingsFragment;

// {

// }
