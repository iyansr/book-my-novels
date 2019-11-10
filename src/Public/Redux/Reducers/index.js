import { combineReducers } from 'redux';

import {novels} from './novels'

const appReducer = combineReducers({
  novels: novels.getNovels,
  novelsId: novels.getNovelsId
});

export default appReducer