import { useRouteError } from "react-router-dom";
import Error404Fragment from "../../Fragments/Errors/404";

function Error() {
  const { status } = useRouteError();
  return <Error404Fragment status={status} />;
}

export default Error;