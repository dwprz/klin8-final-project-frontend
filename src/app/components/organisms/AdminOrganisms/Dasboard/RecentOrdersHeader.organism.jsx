import FilterOrders from "../../../molecules/AdminMolecules/Dashboard/FilterOrders.molecule";
import SearchByCustomerName from "../../../molecules/AdminMolecules/Dashboard/SearchByCustomerName.molecule";

function RecentOrdersHeader() {
  return (
    <header className="px-5 sm:px-10 lg:px-16 xl:ps-[20rem] 2xl:ps-[26rem]">
      <h1 className="text-xl font-semibold">Recent Orders</h1>
      <div className="relative flex items-center mt-3">
        <SearchByCustomerName />
        <FilterOrders />
      </div>
    </header>
  );
}

export default RecentOrdersHeader;
