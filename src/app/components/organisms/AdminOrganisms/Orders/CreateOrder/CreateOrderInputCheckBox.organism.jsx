/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { createOrderHelper } from "../../../../../../helpers/create-order.helper";

function CreateOrderInputCheckBox({ title, names }) {
  const selector = useSelector((state) => state.adminCreateOrder);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <h1>{title}</h1>
      {names.map((name, index) => {
        const { checked, onChange } = createOrderHelper.handleSetAttribute(
          title,
          name,
          selector,
          dispatch
        );

        return (
          <div key={index} className="flex gap-2">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <label htmlFor="CLEAN">{name.replace(/_/g, " ")}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CreateOrderInputCheckBox;
