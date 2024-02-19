/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="text-neutral-100 bg-primary hover:bg-secondary px-5 py-2 rounded-full"
    >
      {children}
    </Link>
  );
}

export default Button;
