import Axios from 'axios'

export const genres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get(
      'https://protected-plateau-40926.herokuapp.com/api/genre'
    )
  };
}