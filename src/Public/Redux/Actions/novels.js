import Axios from 'axios';


export const novels = {
    getNovels: () => {
    return {
      type: 'GET_NOVELS',
      payload: Axios.get(
        'https://protected-plateau-40926.herokuapp.com/api/novel'
      )
    };
  },
   getNovelsById: (id_book) => {
    return {
      type: 'GET_NOVELSBYID',
      payload: Axios.get(
        `https://protected-plateau-40926.herokuapp.com/api/novel/${id_book}`
      )
    };
  }

  }
