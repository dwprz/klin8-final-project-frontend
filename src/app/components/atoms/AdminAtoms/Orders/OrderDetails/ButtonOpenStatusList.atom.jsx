/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

function ButtonOpenStatusList({ statusRef }) {
  const { currentStatus } = useSelector((state) => state.adminOrderDetails);

  return (
    <button
      className="relative text-sm px-3 py-1 border-2 border-primary rounded-full mt-1 sm:w-3/5 lg:w-2/5 flex justify-between"
      onClick={() => {
        statusRef.current.classList.toggle("hidden");
        statusRef.current.classList.toggle("flex");
      }}
    >
      {currentStatus && currentStatus.replace(/_/g, " ")}
      <i className="fa-solid fa-chevron-down absolute right-3 top-[0.4rem]"></i>
    </button>
  );
}

export default ButtonOpenStatusList;
