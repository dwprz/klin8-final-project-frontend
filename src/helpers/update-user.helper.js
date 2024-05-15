const checkUpdateRequest = (updateRequest, existingUser) => {
    const fullName = updateRequest.fullName === existingUser.fullName;
    const whatsapp = updateRequest.whatsapp === existingUser.whatsapp;
    const address = updateRequest.address === existingUser.address;
  
    if (fullName && whatsapp && address) {
      return false;
    }
  
    return true;
  };
  
  export const updateUserHelper = {
    checkUpdateRequest,
  };
  