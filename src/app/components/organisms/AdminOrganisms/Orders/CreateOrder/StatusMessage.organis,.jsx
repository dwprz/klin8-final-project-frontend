import { useSelector } from "react-redux";

function StatusMessage() {
  const { error, isSuccess } = useSelector(
    (state) => state.adminCreateOrder
  );

  return (
    <div>
      {error && <p className="text-red-500 text-sm mt-7">{error}</p>}

      {isSuccess && (
        <p className="text-primary text-sm mt-7">Created order successfully</p>
      )}
    </div>
  );
}

export default StatusMessage;
