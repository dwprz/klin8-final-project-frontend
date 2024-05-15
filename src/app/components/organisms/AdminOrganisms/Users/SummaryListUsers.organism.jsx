import { useDispatch, useSelector } from "react-redux";
import {
  setOpenUserDetails,
  setUser,
} from "../../../../../lib/redux/admin/admin-list-users.reducer";

function SummaryListUsers() {
  const { users, openUserDetails } = useSelector(
    (state) => state.adminListUsers
  );

  const dispatch = useDispatch();

  return (
    users.length &&
    users.map((user, index) => {
      return (
        <div
          key={index}
          className="even:bg-gray-800 hover:bg-primary rounded-full flex gap-3 px-5 py-3"
          onClick={() => {
            dispatch(setUser(user));
            dispatch(setOpenUserDetails(!openUserDetails));
          }}
        >
          {user.photoProfile ? (
            <img
              src={user.photoProfile}
              alt="photoProfile"
              className="w-[3rem] h-[3rem] rounded-full"
            />
          ) : (
            <i className="fa-solid fa-user px-[0.85rem] py-2 text-xl text-gray-600 bg-gray-300 rounded-full"></i>
          )}
          <div>
            <h2>{user.fullName}</h2>
            <h3 className="text-sm">{user.email}</h3>
          </div>
        </div>
      );
    })
  );
}

export default SummaryListUsers;
