import Axios from 'axios';

const url = 'https://protected-plateau-40926.herokuapp.com';

export const novels = {
  getNovels: () => {
    return {
      type: 'GET_NOVELS',
      payload: Axios.get(`${url}/api/novel`)
    };
  },
  getNovelsById: id_book => {
    return {
      type: 'GET_NOVELSBYID',
      payload: Axios.get(`${url}/api/novel/${id_book}`)
    };
  },
  postNovel: newNovel => {
    return {
      type: 'POST_NOVEL',
      payload: Axios.post(`${url}/api/novel`, newNovel)
    };
  }
};
