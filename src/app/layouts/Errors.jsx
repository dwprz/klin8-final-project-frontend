import Error401Fragment from "../Fragments/Errors/401";
import Error404Fragment from "../Fragments/Errors/404";
import Error500Fragment from "../Fragments/Errors/500";

/* eslint-disable react/prop-types */
function ErrorsLayout({ status }) {
  switch (status) {
    case 404:
        return <Error404Fragment />
    case 401: 
      return <Error401Fragment />
    default:
      return <Error500Fragment />
  }
}

export default ErrorsLayout;