import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SET_GENRES = 'SET_GENRES';
export const setGenres = genres => ({
  type: SET_GENRES,
  genres
});

export const SET_MOVIES = 'SET_MOVIES';
export const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});

export const FILTER_USER = 'FILTER_USER';
export const filterUser = user => ({
  type: FILTER_USER,
  user
});


export const FETCH_CURRENT_USER_REQUEST = 'FETCH_CURRENT_USER_REQUEST';
export const fetchCurrentuserRequest = () => ({
  type: FETCH_CURRENT_USER_REQUEST
});

export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const fetchCurrentuserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user
});

export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';
export const fetchCurrentuserFailure = error => ({
  type: FETCH_CURRENT_USER_FAILURE,
  error
});

export const fetchCurrentuser = () => (dispatch, getState) => {
  dispatch(fetchCurrentuserRequest());
  let userId;
  const currentUser = getState().auth.currentUser;
  if (currentUser) {
    userId = currentUser.id;
  }
  return fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchCurrentuserSuccess(res));
      dispatch(setGenres(res.genres));
      dispatch(setMovies(res.movies));
    })
    .catch(err => dispatch(fetchCurrentuserFailure(err)));
};

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST
});

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  user
});

export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  error
});

export const updateUser = data => (dispatch, getState) => {
  dispatch(updateUserRequest());
  const authToken = getState().auth.authToken;
  const currentUser = getState().auth.currentUser;

  return fetch(`${API_BASE_URL}/main/${currentUser.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      dispatch(updateUserSuccess());
      dispatch(setGenres(res.genres));
      dispatch(setMovies(res.movies));
    })
    .catch(err => updateUserFailure(err));
};

export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const fetchMatchesRequest = () => ({
  type: FETCH_MATCHES_REQUEST
});

export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const fetchMatchesSuccess = matches => ({
  type: FETCH_MATCHES_SUCCESS,
  matches
});

export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';
export const fetchMatchesFailure = error => ({
  type: FETCH_MATCHES_FAILURE,
  error
});

export const fetchMatches = () => (dispatch, getState) => {
  dispatch(fetchMatchesRequest());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/main/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchMatchesSuccess(res));
    })
    .catch(err => dispatch(fetchMatchesFailure(err)));
};


export const POPCORN_USER_REQUEST = 'POPCORN_USER_REQUEST';
export const popcornUserRequest = () => ({
  type: POPCORN_USER_REQUEST
});

export const POPCORN_USER_SUCCESS = 'POPCORN_USER_SUCCESS';
export const popcornUserSuccess = matches => ({
  type: POPCORN_USER_SUCCESS,
  matches
});

export const POPCORN_USER_FAILURE = 'POPCORN_USER_FAILURE';
export const popcornUserFailure = error => ({
  type: POPCORN_USER_FAILURE,
  error
});

export const popcornUser = userId => (dispatch, getState) => {
  dispatch(popcornUserRequest());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/main/popcorn`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(userId)
  })
    .then(res => {
      dispatch(popcornUserSuccess());
    })
    .catch(err => dispatch(popcornUserFailure(err)));
};


export const IGNORE_USER_REQUEST = 'IGNORE_USER_REQUEST';
export const ignoreUserRequest = () => ({
  type: IGNORE_USER_REQUEST
});

export const IGNORE_USER_SUCCESS = 'IGNORE_USER_SUCCESS';
export const ignoreUserSuccess = () => ({
  type: IGNORE_USER_SUCCESS
});

export const IGNORE_USER_FAILURE = 'IGNORE_USER_FAILURE';
export const ignoreUserFailure = error => ({
  type: IGNORE_USER_FAILURE,
  error
});

export const ignoreUser = userId => (dispatch, getState) => {
  dispatch(ignoreUserRequest());
  const authToken = getState().auth.authToken;
  const currentUser = getState().auth.currentUser;

  return fetch(`${API_BASE_URL}/main/ignore/${currentUser.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ userId })
  })
    .then(() => {
      dispatch(ignoreUserSuccess());
    })
    .catch(err => dispatch(ignoreUserFailure(err)));
};

export const registerUser = user => () => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const FETCH_POPCORN_REQUEST = 'FETCH_POPCORN_REQUEST';
export const fetchPopcornRequest = () => ({
  type: FETCH_POPCORN_REQUEST
});

export const FETCH_POPCORN_SUCCESS = 'FETCH_POPCORN_SUCCESS';
export const fetchPopcornSuccess = popcorn => ({
  type: FETCH_POPCORN_SUCCESS,
  popcorn
});

export const FETCH_POPCORN_FAILURE = 'FETCH_POPCORN_FAILURE';
export const fetchPopcornFailure = error => ({
  type: FETCH_POPCORN_FAILURE,
  error
});

export const fetchPopcorn = () => (dispatch, getState) => {
  dispatch(fetchPopcornRequest());
  const authToken = getState().auth.authToken;
  const currentUser = getState().auth.currentUser;
  let userId;
  if (currentUser) {
    userId = currentUser.id;
  }

  return fetch(`${API_BASE_URL}/main/popcorn/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchPopcornSuccess(res));
    })
    .catch(err => dispatch(fetchPopcornFailure(err)));
};

export const NEVER_MIND_USER_REQUEST = 'NEVER_MIND_USER_REQUEST';
export const neverMindUserRequest = () => ({
  type: NEVER_MIND_USER_REQUEST
});

export const NEVER_MIND_USER_SUCCESS = 'NEVER_MIND_USER_SUCCESS';
export const neverMindUserSuccess = () => ({
  type: NEVER_MIND_USER_SUCCESS
});

export const NEVER_MIND_USER_FAILURE = 'NEVER_MIND_USER_FAILURE';
export const neverMindUserFailure = error => ({
  type: NEVER_MIND_USER_FAILURE,
  error
});

export const neverMindUser = neverMindUserId => (dispatch, getState) => {
  dispatch(neverMindUserRequest());
  const authToken = getState().auth.authToken;
  const currentUser = getState().auth.currentUser;
  let userId;
  if (currentUser) {
    userId = currentUser.id;
  }

  return fetch(`${API_BASE_URL}/main/nevermind/${userId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ userId: neverMindUserId })
  })
    .then(res => {
      dispatch(neverMindUserSuccess(res));
    })
    .catch(err => dispatch(neverMindUserFailure(err)));
};