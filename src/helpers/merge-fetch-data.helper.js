const mergeFetchData = (existingFetchData, newFetchData) => {
  if (!existingFetchData.length) {
    return newFetchData;
  }

  const existingOrdersIds = existingFetchData.map((order) => order.orderId);

  const filterNewFetchData = newFetchData.filter((order) => {
    !existingOrdersIds.includes(order.orderId);
  });

  return [...existingFetchData, ...filterNewFetchData];
};

export default mergeFetchData;
