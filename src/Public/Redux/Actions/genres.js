import Axios from 'axios';
const url = 'https://protected-plateau-40926.herokuapp.com';

export const genres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get(`${url}/api/genre`)
  };
};