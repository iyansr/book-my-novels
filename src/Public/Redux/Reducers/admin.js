const initialState = {
	adminData: [],
	error: {},
	adminToken: '',
	isLoading: false,
	isRejected: false,
	isFulfilled: false,
};

export const admin = (prevState = initialState, action) => {
	switch (action.type) {
		case 'GET_ADMIN_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'GET_ADMIN_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};

		case 'GET_ADMIN_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				adminToken: action.payload.data,
			};
		default:
			return prevState;
	}
};
