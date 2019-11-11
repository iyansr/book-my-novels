import Axios from 'axios';
const url = 'https://protected-plateau-40926.herokuapp.com';

export const status = () => {
  return {
    type: 'GET_STATUS',
    payload: Axios.get(`${url}/api/status`)
  };
};
