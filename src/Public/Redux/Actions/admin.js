import Axios from 'axios';

export const loginAdmin = data => {
	return {
		type: 'GET_ADMIN',
		payload: Axios.post(
			`http://localhost:9600/api/v2/users/login/admin`,
			data,
			{
				headers: { 'content-type': 'multipart/form-data' },
			}
		),
	};
};
