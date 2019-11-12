import { combineReducers } from 'redux';

import { novels } from './novels';
import genres from './genres';
import status from './status';

const appReducer = combineReducers({
  novels: novels.getNovels,
  novelsId: novels.getNovelsId,
  postNovel: novels.postNovel,
  editNovel: novels.editNovel,
  deleteNovel: novels.deleteNovel ,
  genres: genres,
  status
});

export default appReducer;
