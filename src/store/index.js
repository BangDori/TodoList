import { combineReducers } from 'redux';
import user from './user';
import todos from './todos';

const rootReducer = combineReducers({
  user,
  todos,
});

export default rootReducer;
