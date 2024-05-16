import { useDispatch, useSelector } from "react-redux";
import {
  setActive,
  setError,
  setPaging,
  setSearchFullName,
  setUsers,
} from "../../../../../lib/redux/admin/admin-list-users.reducer";
import { adminService } from "../../../../../service/admin.service";

function ListUsersHeader() {
  const { role, error } = useSelector((state) => state.adminListUsers);
  const dispatch = useDispatch();

  const handleSearchUsers = async (event) => {
    try {
      if (event.key === "Enter") {
        dispatch(setActive("SEARCH"));

        const fullName = event.target.value;
        if (fullName.length < 5) {
          return dispatch(setError("min name length 5"));
        }

        const { data, paging } = await adminService.getUsersByFullNameAndRole(
          fullName,
          role,
          1
        );

        dispatch(setSearchFullName(fullName));
        dispatch(setUsers(data));
        dispatch(setPaging(paging));
        dispatch(setError(null));
      }
    } catch (error) {
      dispatch(setError(error.response.data.error));
    }
  };

  return (
    <header>
      <h1 className="text-xl font-semibold">{`List Users Role ${role}`}</h1>
      <div className="relative flex items-center mt-3">
        {/* Search */}
        <div className="relative w-3/4 text-gray-700">
          <input
            onKeyDown={handleSearchUsers}
            type="search"
            id="searchByCustomer"
            name="searchByCustomer"
            minLength={5}
            className="px-10 py-1 w-full lg:w-2/5 border rounded-full focus:outline outline-primary"
            placeholder="Customer name..."
          />
          <i className="fa-solid fa-magnifying-glass absolute left-2 top-2 pe-2 border-r border-gray-700"></i>
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-5">{error}</p>}
    </header>
  );
}

export default ListUsersHeader;
