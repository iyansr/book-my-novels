import Axios from 'axios';

export const login = data => {
	return {
		type: 'GET_USER',
		payload: Axios.post(
			`https://bookmynovel-api.herokuapp.com/api/v2/users/login`,
			data,
			{ headers: { 'content-type': 'multipart/form-data' } }
		),
	};
};

export const register = data => {
	return {
		type: 'REGISTER_USER',
		payload: Axios.post(
			`https://bookmynovel-api.herokuapp.com/api/v2/users/register`,
			data,
			{
				headers: { 'content-type': 'multipart/form-data' },
			}
		),
	};
};
export const borrowList = user_id => {
	return {
		type: 'BORROW',
		payload: Axios.get(
			`https://bookmynovel-api.herokuapp.com/api/v2/borrowlist/${user_id}`,
			{
				headers: {
					Authorization: 'bearer ' + localStorage.getItem('userToken'),
				},
			}
		),
	};
};
export const borrowHistoryList = user_id => {
	return {
		type: 'BORROW_HISTORY',
		payload: Axios.get(
			`https://bookmynovel-api.herokuapp.com/api/v2/borrowlist/history/${user_id}`,
			{
				headers: {
					Authorization: 'bearer ' + localStorage.getItem('userToken'),
				},
			}
		),
	};
};
export const addBorrow = (user_id, data) => {
	return {
		type: 'ADD_BORROW',
		payload: Axios.post(
			`https://bookmynovel-api.herokuapp.com/api/v2/borrowlist/${user_id}`,
			data,
			{
				headers: {
					Authorization: 'bearer ' + localStorage.getItem('userToken'),
				},
			}
		),
	};
};
export const returnBorrow = (user_id, data) => {
	return {
		type: 'RETURN_BORROW',
		payload: Axios.patch(
			`https://bookmynovel-api.herokuapp.com/api/v2/borrowlist/${user_id}`,
			data,
			{
				headers: {
					Authorization: 'bearer ' + localStorage.getItem('userToken'),
				},
			}
		),
	};
};
