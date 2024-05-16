import { AxiosError } from "axios";
import {
  setError,
  setIsLoading,
  setIsSuccess,
  setOrder,
  setPaymentMethod,
  setServiceMode,
  setServiceName,
} from "../lib/redux/admin/admin-create-order.reducer";

const handleSetAttribute = (title, name, selector, dispatch) => {
  const { serviceName, serviceMode, paymentMethod } = selector;

  if (title === "Service Name:") {
    return {
      checked: serviceName === name,
      onChange: () => dispatch(setServiceName(name)),
    };
  }

  if (title === "Service Mode:") {
    return {
      checked: serviceMode === name,
      onChange: () => dispatch(setServiceMode(name)),
    };
  }

  if (title === "Payment Method:") {
    return {
      checked: paymentMethod === name,
      onChange: () => dispatch(setPaymentMethod(name)),
    };
  }
};

const processCreateOrderRequest = (event, selector) => {
  const { serviceName, totalPrice, serviceMode, paymentMethod, quantity } =
    selector;

  if (!serviceName || !totalPrice || !serviceMode || !paymentMethod) {
    throw new Error("please fill in the input correctly");
  }

  const customerName = selector.customerName
    ? selector.customerName
    : event.target.customerName.value;

  const itemName = event.target.itemName.value;
  const whatsapp = event.target.whatsapp.value || null;
  const address = event.target.address.value || null;

  if (serviceMode != "REGULAR" && !address) {
    throw new Error("please fill in the address input");
  }

  const request = {
    customerName,
    itemName,
    serviceName,
    quantity,
    totalPrice,
    serviceMode,
    paymentMethod,
    whatsapp,
    address,
  };

  return request;
};

const handleStateAfterCreateOrder = (event, dispatch, result) => {
  event.target.customerName.value = "";
  event.target.itemName.value = "";
  event.target.whatsapp.value = "";
  event.target.address.value = "";

  dispatch(setOrder(result));
  dispatch(setIsLoading(false));
  dispatch(setIsSuccess(true));

  dispatch(setError(null));
  dispatch(setServiceName(null));
  dispatch(setServiceMode(null));
  dispatch(setPaymentMethod(null));
};

const handleCreateOrderError = (error, dispatch) => {
  dispatch(setIsLoading(false));
  dispatch(setIsSuccess(false));

  if (error instanceof AxiosError) {
    return dispatch(setError(error.response.data.error));
  }
  dispatch(setError(error.message));
};

export const createOrderHelper = {
  handleSetAttribute,
  processCreateOrderRequest,
  handleStateAfterCreateOrder,
  handleCreateOrderError,
};
