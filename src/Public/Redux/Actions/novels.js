import Axios from 'axios';

// const url = 'https://novel-library-backend.herokuapp.com';
// const development = 'http://localhost:3367';

export const getNovels = query => {
	return {
		type: 'GET_NOVELS',
		payload: Axios.get(`http://localhost:9600/api/v2/novel${query}`),
	};
};
export const getOneNovels = id => {
	return {
		type: 'GET_ONE_NOVEL',
		payload: Axios.get(`http://localhost:9600/api/v2/novel/detail/${id}`, {
			headers: { Authorization: 'bearer ' + localStorage.getItem('userToken') },
		}),
	};
};
export const addNovel = data => {
	return {
		type: 'ADD_NOVEL',
		payload: Axios.post(`http://localhost:9600/api/v2/novel`, data, {
			headers: {
				Authorization: 'bearer ' + localStorage.getItem('userToken'),
				'content-type': 'multipart/form-data',
			},
		}),
	};
};
export const editNovel = (id, data) => {
	return {
		type: 'EDIT_NOVEL',
		payload: Axios.patch(
			`http://localhost:9600/api/v2/novel/update/${id}`,
			data,
			{
				headers: {
					Authorization: 'bearer ' + localStorage.getItem('userToken'),
					'content-type': 'multipart/form-data',
				},
			}
		),
	};
};
export const deleteNovel = id => {
	return {
		type: 'DELETE_NOVEL',
		payload: Axios.delete(`http://localhost:9600/api/v2/novel/delete/${id}`, {
			headers: {
				Authorization: 'bearer ' + localStorage.getItem('userToken'),
				'content-type': 'multipart/form-data',
			},
		}),
	};
};
