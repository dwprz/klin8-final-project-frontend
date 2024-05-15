/* eslint-disable react/prop-types */
function CustomerName({ customerName }) {
  return (
    <p className="text-xl font-bold px-3 py-2 bg-slate-100 rounded-2xl">
      {customerName}
    </p>
  );
}

export default CustomerName;
