import ShowMoreOrders from "../../../../molecules/AdminMolecules/Orders/Table/ShowMoreOrders.molecules";
import TableOrdersBody from "../../../../molecules/AdminMolecules/Orders/Table/TableOrdersBody.molecule";
import TableOrdersHeader from "../../../../molecules/AdminMolecules/Orders/Table/TableOrdersHeader.molecule";
import { useSelector } from "react-redux";

function TabelOrders() {
  const { paging } = useSelector((state) => state.adminOrders);

  return (
    <div className="overflow-x-auto px-5 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[26rem] mt-5">
      <p>total: {paging && paging.totalData}</p>
      <table className="w-full text-neutral-300 border-gray-200">
        <TableOrdersHeader />
        <TableOrdersBody />
      </table>
      {paging.totalPage > paging.page && <ShowMoreOrders />}
    </div>
  );
}

export default TabelOrders;
