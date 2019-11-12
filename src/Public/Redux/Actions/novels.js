import Axios from 'axios';

const url = 'https://protected-plateau-40926.herokuapp.com';
const production = 'http://localhost:3367';

export const novels = {
  getNovels: query => {
    return {
      type: 'GET_NOVELS',
      payload: Axios.get(`${production}/api/novel${query}`)
    };
  },
  getNovelsById: id_book => {
    return {
      type: 'GET_NOVELSBYID',
      payload: Axios.get(`${production}/api/novel/${id_book}`)
    };
  },
  postNovel: newNovel => {
    return {
      type: 'POST_NOVEL',
      payload: Axios.post(`${production}/api/novel`, newNovel)
    };
  },
  editNovel: (newNovel, id) => {
    return {
      type: 'EDIT_NOVEL',
      payload: Axios.put(`${production}/api/novel/${id}`, newNovel)
    };
  },
  deleteNovel: () => {
    return {};
  }
};
