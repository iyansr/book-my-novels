import Axios from 'axios';

export const loginAdmin = data => {
	return {
		type: 'GET_ADMIN',
		payload: Axios.post(
			`https://bookmynovel-api.herokuapp.com/api/v2/users/login/admin`,
			data,
			{
				headers: { 'content-type': 'multipart/form-data' },
			}
		),
	};
};
