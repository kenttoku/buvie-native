import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  movie: movieReducer,
  user: userReducer
});