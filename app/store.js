import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import { loadAuthToken } from './storage';
import { setAuthToken, refreshAuthToken } from './actions'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
