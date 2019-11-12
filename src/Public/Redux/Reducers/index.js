import { combineReducers } from 'redux';

import { novels } from './novels';
import genres from './genres';
import status from './status';

const appReducer = combineReducers({
  novels: novels.getNovels,
  novelsId: novels.getNovelsId,
  postNovel: novels.postNovel,
  editNovel: novels.editNovel,
  genres: genres,
  status
});

export default appReducer;
