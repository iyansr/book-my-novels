import Axios from 'axios';
// const url = 'https://novel-library-backend.herokuapp.com';
// const development = 'http://localhost:3367';

export const status = () => {
	return {
		type: 'GET_STATUS',
		payload: Axios.get('https://bookmynovel-api.herokuapp.com/api/v2/status'),
	};
};
