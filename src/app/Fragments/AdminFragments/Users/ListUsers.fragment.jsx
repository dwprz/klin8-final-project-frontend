import { useEffect } from "react";
import { adminService } from "../../../../service/admin.service";
import { useDispatch } from "react-redux";
import {
  setPaging,
  setRole,
  setUsers,
} from "../../../../lib/redux/admin/admin-list-users.reducer";
import { useLocation } from "react-router-dom";
import ListUsersHeader from "../../../components/organisms/AdminOrganisms/Users/ListUsersHeader.organism";
import ListUsersOrganism from "../../../components/organisms/AdminOrganisms/Users/ListUsers.organism";

function ListUsersFragment() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchListAdmins = async () => {
      try {
        const role = pathname === "/admins/list-users" ? "USER" : "ADMIN";
        const { data, paging } = await adminService.getListUsers(role, 1);

        dispatch(setUsers(data));
        dispatch(setPaging(paging));
        dispatch(setRole(role));
        return;
      } catch (error) {
        console.log(error.response.data.error);
      }
    };

    fetchListAdmins();
  }, [dispatch, pathname]);

  return (
    <>
      <section className="min-h-screen px-5 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[28rem] py-24 bg-gray-700 text-neutral-300">
        <ListUsersHeader />
        <ListUsersOrganism />
      </section>
    </>
  );
}

export default ListUsersFragment;
