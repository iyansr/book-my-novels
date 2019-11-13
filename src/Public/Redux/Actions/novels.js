import Axios from 'axios';

const url = 'http://novel-library-backend.herokuapp.com';
const development = 'http://localhost:3367';

export const novels = {
	getNovels: query => {
		return {
			type: 'GET_NOVELS',
			payload: Axios.get(`${url}/api/novel${query}`),
		};
	},
	getNovelsById: id_book => {
		return {
			type: 'GET_NOVELSBYID',
			payload: Axios.get(`${url}/api/novel/${id_book}`),
		};
	},
	postNovel: newNovel => {
		return {
			type: 'POST_NOVEL',
			payload: Axios.post(`${url}/api/novel`, newNovel),
		};
	},
	editNovel: (newNovel, id) => {
		return {
			type: 'EDIT_NOVEL',
			payload: Axios.put(`${url}/api/novel/${id}`, newNovel),
		};
	},
	deleteNovel: id_book => {
		return {
			type: 'DELETE_NOVEL',
			payload: Axios.delete(`http://localhost:3367/api/novel/${id_book}`),
		};
	},
};
