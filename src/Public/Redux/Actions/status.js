import Axios from 'axios';
const url = 'http://novel-library-backend.herokuapp.com';
const development = 'http://localhost:3367';

export const status = () => {
	return {
		type: 'GET_STATUS',
		payload: Axios.get(`${url}/api/status`),
	};
};
