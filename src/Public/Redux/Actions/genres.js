import Axios from 'axios';
const url = 'http://novel-library-backend.herokuapp.com';
const development = 'http://localhost:3367';

export const genres = () => {
	return {
		type: 'GET_GENRES',
		payload: Axios.get(`${url}/api/genre`),
	};
};
