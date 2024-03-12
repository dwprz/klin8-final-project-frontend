export const handleButtonMore = (name, setServiceDetailState, Services) => {
  switch (name) {
    case "Cleaning":
      setServiceDetailState(Services[0]);
      break;
    case "Repainting":
      setServiceDetailState(Services[1]);
      break;
    case "Repair":
      setServiceDetailState(Services[2]);
      break;
    case "Consultasy":
      window.location.href = "https://www.whatsapp.com/download/";
      break;
    default:
      break;
  }
};
