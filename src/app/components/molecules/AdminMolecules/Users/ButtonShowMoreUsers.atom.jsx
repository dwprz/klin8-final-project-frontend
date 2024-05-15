import { useDispatch, useSelector } from "react-redux";
import {
  setPaging,
  setUsers,
} from "../../../../../lib/redux/admin/admin-list-users.reducer";
import { adminService } from "../../../../../service/admin.service";
import mergeFetchData from "../../../../../helpers/merge-fetch-data.helper";

function ButtonShowMoreUsers() {
  const { searchFullName, active, page, paging, role } = useSelector(
    (state) => state.adminListUsers
  );
  const dispatch = useDispatch();

  const handleShowMoreAdmins = async () => {
    try {
      if (page > 1) {
        if (active === "SEARCH") {
          const { data, paging } = await adminService.getUsersByFullNameAndRole(
            searchFullName,
            role,
            page + 1
          );

          dispatch(setUsers((prevAdmins) => mergeFetchData(prevAdmins, data)));
          dispatch(setPaging(paging));
          return;
        }

        const { data, paging } = await adminService.getListUsers(
          role,
          page + 1
        );

        dispatch(setUsers((prevAdmins) => mergeFetchData(prevAdmins, data)));
        dispatch(setPaging(paging));
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    paging.totalPage > paging.page && (
      <div className={`flex justify-center mt-7`}>
        <button
          className="px-3 py-1 bg-primary hover:bg-secondary rounded-full"
          onClick={handleShowMoreAdmins}
        >
          {`Show More ${role === "USER" ? "Users" : "Admins"}`}
        </button>
      </div>
    )
  );
}

export default ButtonShowMoreUsers;
