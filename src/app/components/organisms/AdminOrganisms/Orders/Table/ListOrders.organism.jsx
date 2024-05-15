import TabelOrders from "./TabelOrders.organism";
import ListOrdersHeader from "./ListOrdersHeader";

function ListOrders() {
  return (
    <section className="mt-7">
      <ListOrdersHeader />
      <TabelOrders />
    </section>
  );
}

export default ListOrders;
