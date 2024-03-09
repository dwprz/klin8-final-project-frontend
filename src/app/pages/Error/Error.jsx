import { useRouteError } from "react-router-dom";
import ErrorsLayout from "../../layouts/Errors/";

function Error() {
  const { status } = useRouteError();
  return <ErrorsLayout status={status} />;
}

export default Error;