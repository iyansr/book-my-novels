import Axios from 'axios';
const url = 'https://protected-plateau-40926.herokuapp.com';
const development = 'http://localhost:3367';

export const status = () => {
  return {
    type: 'GET_STATUS',
    payload: Axios.get(`${development}/api/status`)
  };
};
