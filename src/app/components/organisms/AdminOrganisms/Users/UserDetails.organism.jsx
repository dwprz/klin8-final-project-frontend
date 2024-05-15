import { useDispatch, useSelector } from "react-redux";
import { setOpenUserDetails } from "../../../../../lib/redux/admin/admin-list-users.reducer";
import UserDetailFragment from "../../../../Fragments/AdminFragments/Users/UserDetails.fragment";

function UserDetailsOrganism() {
  const { user, openUserDetails } = useSelector(
    (state) => state.adminListUsers
  );

  const dispatch = useDispatch();

  return (
    <section
      className={`${
        openUserDetails ? "block" : "hidden"
      } absolute top-0 left-0 bg-gray-700 text-neutral-300 w-full min-h-screen py-10 z-30`}
    >
      <i
        onClick={() => {
          dispatch(setOpenUserDetails(!openUserDetails));
        }}
        className="fa-regular fa-circle-xmark absolute text-xl lg:text-2xl xl:text-3xl hover:text-secondary text-primary right-7 sm:right-14 xl:right-24 top-7 sm:top-10"
      ></i>
      <UserDetailFragment user={user} />
    </section>
  );
}

export default UserDetailsOrganism;
