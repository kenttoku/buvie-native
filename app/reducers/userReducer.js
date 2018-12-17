import {
  SET_GENRES,
  SET_MOVIES,
  FILTER_USER,
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  FETCH_POPCORN_REQUEST,
  FETCH_POPCORN_SUCCESS,
  FETCH_POPCORN_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  IGNORE_USER_REQUEST,
  IGNORE_USER_SUCCESS,
  IGNORE_USER_FAILURE,
  NEVER_MIND_USER_FAILURE,
  NEVER_MIND_USER_REQUEST,
  NEVER_MIND_USER_SUCCESS,
  RESET_USER
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  movies: [],
  genres: [],
  matches: [],
  popcorn: [],
  pending: [],
  matched: [],
  filter: [],
  userCity: '',
  userCoords: {},
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_GENRES) {
    return Object.assign({}, state, {
      genres: action.genres
    });
  } else if (action.type === SET_MOVIES) {
    return Object.assign({}, state, {
      movies: action.movies
    });
  } else if (action.type === FILTER_USER) {
    return Object.assign({}, state, {
      filter: [...state.filter, action.user]
    });
  } else if (action.type === FETCH_MATCHES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_MATCHES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      matches: action.matches
    });
  } else if (action.type === FETCH_MATCHES_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === FETCH_CURRENT_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_CURRENT_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    });
  } else if (action.type === FETCH_CURRENT_USER_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === FETCH_POPCORN_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_POPCORN_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      popcorn: action.popcorn.popcorned,
      pending: action.popcorn.pendingPopcorn
    });
  } else if (action.type === FETCH_POPCORN_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === UPDATE_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === UPDATE_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
    });
  } else if (action.type === UPDATE_USER_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === IGNORE_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === IGNORE_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
    });
  } else if (action.type === IGNORE_USER_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === NEVER_MIND_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === NEVER_MIND_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
    });
  } else if (action.type === NEVER_MIND_USER_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === RESET_USER) {
    return initialState;
  }
  return state;
}
