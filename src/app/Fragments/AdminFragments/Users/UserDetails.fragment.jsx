/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import convertToFormattedDate from "../../../../helpers/convert-to-formated-date.helper";

function UserDetailFragment(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    user && (
      <div className="flex flex-col justify-between h-full mt-10 px-10 sm:px-20 lg:px-32 xl:px-40 2xl:px-64">
        <header className="mb-12 text-xl font-semibold border-b border-primary w-max px-1">
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

        <div className="text-center mt-14 flex flex-col gap-2">
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
    )
  );
}

export default UserDetailFragment;
