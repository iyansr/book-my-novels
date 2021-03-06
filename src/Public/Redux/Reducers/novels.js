const initState = {
	novelData: [],
	error: {},
	isLoading: false,
	isRejected: false,
	isFulfilled: false,
};

export const novels = (prevState = initState, action) => {
	switch (action.type) {
		case 'GET_NOVELS_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'GET_NOVELS_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.data,
			};
		case 'GET_NOVELS_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				novelData: action.payload.data,
			};
		case 'GET_ONE_NOVEL_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'GET_ONE_NOVEL_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.status,
			};
		case 'GET_ONE_NOVEL_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
				novelData: action.payload.data,
			};

		case 'ADD_NOVEL_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'ADD_NOVEL_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
			};
		case 'ADD_NOVEL_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};

		case 'EDIT_NOVEL_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'EDIT_NOVEL_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
				error: action.payload.response.status,
			};
		case 'EDIT_NOVEL_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};
		case 'DELETE_NOVEL_PENDING':
			return {
				...prevState,
				isLoading: true,
				isRejected: false,
				isFulfilled: false,
			};

		case 'DELETE_NOVEL_REJECTED':
			return {
				...prevState,
				isLoading: false,
				isRejected: true,
			};
		case 'DELETE_NOVEL_FULFILLED':
			return {
				...prevState,
				isLoading: false,
				isFulfilled: true,
			};

		default:
			return prevState;
	}
};
