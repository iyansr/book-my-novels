import Axios from 'axios';

// export const getNovels = () => {
//   return {
//     type: 'GET_NOVELS',
//     payload: Axios.get('http://localhost:3367/api/novel')
//   };
// };

export const novels = {
    getNovels: () => {
    return {
      type: 'GET_NOVELS',
      payload: Axios.get('http://localhost:3367/api/novel')
    }
  },
   getNovelsById: (id_book) => {
    return {
      type: 'GET_NOVELSBYID',
      payload: Axios.get(`http://localhost:3367/api/novel/${id_book}`)
    };
  }

  }
