const orderDateFormated = (date) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  date = new Date(date);
  const formattedDate = date.toLocaleDateString("id-ID", options);

  return formattedDate;
};

export default orderDateFormated;
