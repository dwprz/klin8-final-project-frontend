/* eslint-disable react/prop-types */
function TotalPrice({ children }) {
  return (
    <div className="flex justify-between font-bold px-3 py-2 bg-slate-100 rounded-2xl">
      <p>Total:</p>
      {children}
    </div>
  );
}

export default TotalPrice;
