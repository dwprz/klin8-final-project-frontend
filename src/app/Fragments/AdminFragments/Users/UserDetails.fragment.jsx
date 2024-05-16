/* eslint-disable react/prop-types */
import convertToFormattedDate from "../../../../helpers/convert-to-formated-date.helper";
import { useDispatch, useSelector } from "react-redux";
import { setOpenUserDetails } from "../../../../lib/redux/admin/admin-list-users.reducer";

function UserDetailFragment() {
  const { user, openUserDetails } = useSelector(
    (state) => state.adminListUsers
  );

  const dispatch = useDispatch();

  return (
    <section
      className={`${
        openUserDetails ? "block" : "hidden"
      } bg-gray-700 text-neutral-300 w-full min-h-screen px-7 sm:px-14 lg:px-24 xl:ps-[20rem] 2xl:ps-[28rem] py-24 z-30`}
    >
      <i
        onClick={() => {
          dispatch(setOpenUserDetails(!openUserDetails));
        }}
        className="fa-regular fa-circle-xmark absolute text-xl lg:text-2xl xl:text-3xl hover:text-secondary text-primary right-7 sm:right-14 lg:right-24 top-24 sm:top-28"
      ></i>
      <div className="flex flex-col justify-between h-full mt-10 lg:w-3/5 mx-auto">
        <header className="mb-12 sm:mt-14 text-xl font-semibold">
          User Detail
        </header>

        {user.photoProfile ? (
          <img
            src={user.photoProfile}
            alt="photoProfile"
            className="w-[10rem] h-[10rem] rounded-full mx-auto"
          />
        ) : (
          <i className="fa-solid fa-user px-7 py-6 bg-neutral-300 rounded-full text-7xl text-gray-600 w-max mx-auto"></i>
        )}

        <div className="text-center text-sm sm:text-lg mt-14 flex flex-col gap-2">
          <p className="border px-3 py-2 bg-gray-900">
            {user.fullName} ({user.role})
          </p>
          <p className="border px-3 py-2 bg-gray-900">{user.email}</p>
          <p className="border px-3 py-2 bg-gray-900">
            {user.whatsapp ? user.whatsapp : "whatsapp: -"}
          </p>
          <p className="border px-3 py-2 bg-gray-900 text-sm">
            {user.address ? user.address : "address: -"}
          </p>
          <div className="border px-3 py-2 bg-gray-900">
            <p>created at:</p>
            <p>{user.createdAt && convertToFormattedDate(user.createdAt)}</p>
          </div>
          <div className="border px-3 py-2 bg-gray-900">
            <p>updated at:</p>
            <p>{user.updatedAt && convertToFormattedDate(user.updatedAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDetailFragment;
