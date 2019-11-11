import { combineReducers } from 'redux';

import {novels} from './novels'
import genres from './genres'

const appReducer = combineReducers({
  novels: novels.getNovels,
  novelsId: novels.getNovelsId,
  genres: genres

});

export default appReducer