const convertToFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  date = new Date(date);
  const formattedDate = date.toLocaleDateString("id-ID", options);

  return formattedDate;
};

export default convertToFormattedDate;
