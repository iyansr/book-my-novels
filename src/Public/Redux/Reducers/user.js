const initialState = {
	userData: [],
	error: {
		error: false,
	},
	errorHistory: {
		error: false,
	},
	userToken: '',
	borrow: [],
	historyList: [],
	isLoading: false,
	isRejected: false,
	isFulfilled: false,
};

export const user = (prevState = initialState, action) => {
	switch (action.type) {
		case 'GET_USER_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'GET_USER_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'GET_USER_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				error: {},
				userToken: localStorage.setItem('userToken', action.payload.data),
			};
		case 'REGISTER_USER_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'REGISTER_USER_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'REGISTER_USER_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};
		case 'BORROW_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'BORROW_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'BORROW_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				borrow: action.payload.data.borrow,
			};
		case 'BORROW_HISTORY_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'BORROW_HISTORY_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				errorHistory: action.payload.response.data,
			};

		case 'BORROW_HISTORY_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				historyList: action.payload.data.borrow,
			};
		case 'ADD_BORROW_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'ADD_BORROW_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'ADD_BORROW_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};
		case 'RETURN_BORROW_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'RETURN_BORROW_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'RETURN_BORROW_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};
		default:
			return prevState;
	}
};
