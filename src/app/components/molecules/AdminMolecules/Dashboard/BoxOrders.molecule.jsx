/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function BoxOrdersMolecule({ path, icon, title, count }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-1 text-center border-[1.5px] px-5 py-2 rounded-xl"
      onClick={() => navigate(path)}
    >
      {title === "Create Order" ? (
        <i className={`${icon} text-3xl text-primary`}></i>
      ) : (
        <div className="text-xl">
          <i className={`${icon} text-primary me-2`}></i>
          <span className="font-bold">{count}</span>
        </div>
      )}
      <span className="text-xs">{title}</span>
    </div>
  );
}

export default BoxOrdersMolecule;
