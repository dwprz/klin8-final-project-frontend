const mergeFetchData = (existingFetchData, newFetchData) => {
  if (!existingFetchData.length) {
    return newFetchData;
  }

  const propertyId = existingFetchData[0].orderId ? "orderId" : "userId";

  const existingOrdersIds = existingFetchData.map((data) => data[propertyId]);

  const filterNewFetchData = newFetchData.filter(
    (data) => !existingOrdersIds.includes(data[propertyId])
  );

  return [...existingFetchData, ...filterNewFetchData];
};

export default mergeFetchData;
