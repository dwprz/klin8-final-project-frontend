import { useRouteError } from "react-router-dom";
import ErrorsLayout from "../../layouts/Errors";

function Error() {
    const error = useRouteError()

  return (
    <ErrorsLayout>
        {`${error.status} ${error.statusText}`}
    </ErrorsLayout>
  );
}

export default Error;
