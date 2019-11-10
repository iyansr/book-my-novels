// const initStateById = {
//   novelDataId: [],
//   isLoading: false,
//   isRejected: false,
//   isFulfilled: false
// };

//  export const getNovelsId= (prevState = initStateById, action) => {
//    switch (action.type) {
//      case 'GET_NOVELSBYID_PENDING':
//        return {
//          ...prevState,
//          isLoading: true,
//          isRejected: false,
//          isFulfilled: false
//        };

//      case 'GET_NOVELSBYID_REJECTED':
//        return {
//          ...prevState,
//          isLoading: false,
//          isRejected: true
//        };
//      case 'GET_NOVELSBYID_FULFILLED':
//        return {
//          ...prevState,
//          isLoading: false,
//          isFulfilled: true,
//          novelDataId: action.payload.data.data[0]
//        };

//      default:
//        return prevState;
//    }
//  };