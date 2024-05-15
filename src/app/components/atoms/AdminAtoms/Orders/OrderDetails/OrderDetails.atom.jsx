/* eslint-disable react/prop-types */
function OrderDetailsAtom({ children, title }) {
  return (
    <div>
      <p className="text-sm text-gray-400 ">{title}</p>
      {children}
    </div>
  );
}

export default OrderDetailsAtom;
