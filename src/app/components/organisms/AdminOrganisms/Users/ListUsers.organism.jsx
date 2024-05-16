import { useSelector } from "react-redux";
import SummaryListUsers from "./SummaryListUsers.organism";
import ButtonShowMoreUsers from "../../../molecules/AdminMolecules/Users/ButtonShowMoreUsers.atom";

function ListUsersOrganism() {
  const { paging } = useSelector((state) => state.adminListUsers);

  return (
    <div className="mt-3 w-full">
      <p className="mt-5 mb-2">Total: {paging.totalData || 0}</p>
      <SummaryListUsers />
      <ButtonShowMoreUsers />
    </div>
  );
}

export default ListUsersOrganism;
