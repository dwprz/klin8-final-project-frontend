/* eslint-disable react/prop-types */
function CreateOrderInputText({ label, name, placeholder }) {
  return (
    <div className="flex flex-col gap-1 w-3/4 sm:w-3/5 xl:w-2/5">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={name === "customerName" || name === "itemName"}
        className="px-3 py-1 border rounded-full outline-primary text-gray-600"
      />
    </div>
  );
}

export default CreateOrderInputText;
