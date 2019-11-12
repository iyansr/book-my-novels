import Axios from 'axios';
const url = 'https://protected-plateau-40926.herokuapp.com';
const production = 'http://localhost:3367';

export const genres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get(`${production}/api/genre`)
  };
};
