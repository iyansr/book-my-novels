const initialState = {
  statusData: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const status = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_STATUS_PENDING':
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };

    case 'GET_STATUS_REJECTED':
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };

    case 'GET_STATUS_FULFILLED':
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        statusData: action.payload.data
      };
    default:
      return prevState;
  }
};
export default status;
