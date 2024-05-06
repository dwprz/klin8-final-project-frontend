import { useRouteError } from "react-router-dom";
import ErrorsLayout from "../layouts/Errors.layout";


function ErrorPage() {
  const { status } = useRouteError();
  return <ErrorsLayout status={status} />;
}

export default ErrorPage;