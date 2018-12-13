import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  RESET_MOVIES
} from '../actions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_MOVIES_SUCCESS) {
    return Object.assign({}, state, {
      list: action.movies
    });
  } else if (action.type === RESET_MOVIES) {
    return initialState;
  }
  return state;
}
