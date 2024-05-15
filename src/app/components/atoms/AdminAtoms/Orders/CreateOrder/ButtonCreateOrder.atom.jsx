import { useSelector } from "react-redux";

function ButtonCreateOrder() {
  const { isLoading } = useSelector((state) => state.adminCreateOrder);

  return (
    <div className="mt-10">
      <button
        type="submit"
        disabled={isLoading}
        className="px-3 py-1 bg-primary rounded-full"
      >
        {isLoading ? "Loading..." : "Create"}
      </button>
    </div>
  );
}

export default ButtonCreateOrder;
