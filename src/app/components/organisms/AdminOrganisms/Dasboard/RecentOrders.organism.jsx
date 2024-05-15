import TabelOrders from "../Orders/TabelOrders.organism";
import RecentOrdersHeader from "./RecentOrdersHeader.organism";

function RecentOrders() {
  return (
    <section className="mt-7">
      <RecentOrdersHeader />
      <TabelOrders />
    </section>
  );
}

export default RecentOrders;
