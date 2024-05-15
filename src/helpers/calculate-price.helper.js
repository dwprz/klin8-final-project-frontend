const calculatePrice = (serviceName, serviceMode, quantity) => {
  let price;
  let servicePrice;

  switch (serviceName) {
    case "CLEAN":
      price = 10000;
      break;
    case "REPAINT":
      price = 50000;
      break;
    case "REPAIR":
      price = 70000;
      break;
    default:
      break;
  }

  switch (serviceMode) {
    case "PICK_UP_ONLY":
      servicePrice = 10000;
      break;
    case "DELIVERY_ONLY":
      servicePrice = 10000;
      break;
    case "PICK_UP_AND_DELIVERY":
      servicePrice = 20000;
      break;
    default:
      servicePrice = 0;
      break;
  }

  const totalPrice = price * quantity + servicePrice;
  
  return isNaN(totalPrice) ? 0 : totalPrice;
};

export default calculatePrice;
