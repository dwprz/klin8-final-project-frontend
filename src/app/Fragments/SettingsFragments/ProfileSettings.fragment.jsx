import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserHelper } from "../../../helpers/update-user.helper";
import FormPassword from "../../components/organisms/FromPassword.organism";
import { useSelector } from "react-redux";

function ProfileSettingsFragment() {
  const navigate = useNavigate();
  const formPasswordRef = useRef(null);
  const formProfileRef = useRef(null);
  const [updateRequest, setUpdateRequest] = useState({});
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    setError(null);

    const request = {
      fullName: event.target.fullName.value,
      whatsapp: event.target.whatsapp.value,
      address: event.target.address.value,
    };

    const pass = updateUserHelper.checkUpdateRequest(request, user);

    if (!pass) {
      return setError("there is no change in the input");
    }

    setUpdateRequest(request);

    formPasswordRef.current.classList.toggle("hidden");
    formPasswordRef.current.classList.toggle("flex");

    formProfileRef.current.classList.toggle("hidden");
  };

  return (
    <section className="min-h-screen bg-gray-800 pt-[5.5rem] lg:pb-14">
      <div className="sm:w-5/6 xl:w-2/5 lg:min-h-screen lg:border-2 border-gray-600 rounded-xl lg:bg-gray-700 lg:p-7 mx-auto">
        <div ref={formProfileRef}>
          <i
            className="fa-solid fa-arrow-left text-primary text-xl py-2 px-5 sm:px-0"
            onClick={() => navigate("/settings")}
          ></i>
          <div className="border-t-2 border-gray-600">
            <h1 className="text-neutral-300 text-xl font-semibold py-3 px-5 sm:px-0">
              Profile Settings
            </h1>

            {/* Form */}
            <form onSubmit={handleUpdateUser} className="px-5 sm:px-0">
              <div className="w-full flex flex-col gap-4">
                <label
                  className="text-neutral-400 text-sm font-semibold"
                  htmlFor="fullName"
                >
                  Full Name:
                </label>
                <div className="flex items-center justify-between text-neutral-100 border-b-2 border-gray-600 pb-1">
                  <input
                    name="fullName"
                    className="bg-gray-800 lg:bg-gray-700 outline-none flex items-center justify-between"
                    defaultValue={user.fullName}
                    required
                  ></input>
                  <i className="fa-solid fa-pen"></i>
                </div>
                <label
                  className="text-neutral-400 text-sm font-semibold"
                  htmlFor="whatsapp"
                >
                  Whatsapp:
                </label>
                <div className="flex items-center justify-between text-neutral-100 border-b-2 border-gray-600 pb-1">
                  <input
                    name="whatsapp"
                    className="bg-gray-800 lg:bg-gray-700 outline-none flex items-center justify-between"
                    defaultValue={user.whatsapp}
                    required
                  ></input>
                  <i className="fa-solid fa-pen"></i>
                </div>
                <label
                  className="text-neutral-400 text-sm font-semibold"
                  htmlFor="address"
                >
                  Address:
                </label>
                <div className="flex items-center justify-between text-neutral-100 border-b-2 border-gray-600 pb-1">
                  <input
                    name="address"
                    className="bg-gray-800 lg:bg-gray-700 outline-none flex items-center justify-between"
                    defaultValue={user.address}
                    required
                  ></input>
                  <i className="fa-solid fa-pen"></i>
                </div>
              </div>

              {error && (
                <p className="mt-10 text-sm text-center text-red-500 px-5 sm:px-0">
                  {error}
                </p>
              )}

              {/* Button submit */}
              <div className="mt-14 flex justify-center">
                <button
                  type="submit"
                  className="text-neutral-300 px-5 py-1 bg-primary hover:bg-secondary rounded-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        <div ref={formPasswordRef} className="hidden flex-col">
          <i
            className="fa-solid fa-arrow-left text-primary text-xl py-2 px-5"
            onClick={() => {
              formPasswordRef.current.classList.toggle("hidden");
              formPasswordRef.current.classList.toggle("flex");

              formProfileRef.current.classList.toggle("hidden");
            }}
          ></i>
          <div>
            <FormPassword updateRequest={updateRequest} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSettingsFragment;
