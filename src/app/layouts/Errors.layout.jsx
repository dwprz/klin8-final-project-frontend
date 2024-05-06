import Error401Fragment from "../Fragments/ErrorFragments/401.fragment";
import Error404Fragment from "../Fragments/ErrorFragments/404.fragment";
import Error500Fragment from "../Fragments/ErrorFragments/500.fragment";


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