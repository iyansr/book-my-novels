import { combineReducers } from 'redux';

import { novels } from './novels';
import { genres } from './genres';
import { user } from './user';
import { admin } from './admin';
import status from './status';

const appReducer = combineReducers({
	novels,
	genres,
	user,
	admin,
	status,
});

export default appReducer;
