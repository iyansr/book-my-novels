const initialState = {
  genreData: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const genres = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_GENRES_PENDING':
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };

    case 'GET_GENRES_REJECTED':
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };

    case 'GET_GENRES_FULFILLED':
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        genreData: action.payload.data
      };
    default:
      return prevState
  }
};
export default genres