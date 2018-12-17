import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import { loadAuthToken } from './storage';
import { setAuthToken, refreshAuthToken } from './actions'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const hydrate = async () => {
  console.log('running')
  const authToken = await loadAuthToken();
  console.log(authToken)
  if (authToken) {
    console.log(authToken)
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
  }
}

hydrate();
export default store;
