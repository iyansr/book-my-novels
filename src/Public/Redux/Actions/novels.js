import Axios from 'axios';

const url = 'https://novel-library-backend.herokuapp.com';
const development = 'http://localhost:3367';

export const novels = {
	getNovels: query => {
		return {
			type: 'GET_NOVELS',
			payload: Axios.get(`${development}/api/novel${query}`),
		};
	},
	getNovelsById: id_book => {
		return {
			type: 'GET_NOVELSBYID',
			payload: Axios.get(`${development}/api/novel/${id_book}`),
		};
	},
	postNovel: newNovel => {
		return {
			type: 'POST_NOVEL',
			payload: Axios.post(`${development}/api/novel`, newNovel),
		};
	},
	editNovel: (newNovel, id) => {
		return {
			type: 'EDIT_NOVEL',
			payload: Axios.put(`${development}/api/novel/${id}`, newNovel),
		};
	},
	deleteNovel: id_book => {
		return {
			type: 'DELETE_NOVEL',
			payload: Axios.delete(`${development}/api/novel/${id_book}`),
		};
	},
};
