import { useParams } from "react-router-dom";
import ServiceDetailFragment from "../../../Fragments/Service/ServiceDetail/ServiceDetail";
import PagesLayout from "../../../layouts/Pages";

function ServiceDetail() {
  const { id } = useParams();

  console.log(id);

  return (
    <PagesLayout>
      <ServiceDetailFragment id={id} />
    </PagesLayout>
  );
}

export default ServiceDetail;
