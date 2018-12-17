import { API_BASE_URL } from '../config';


export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  error
});

export const RESET_MOVIES = 'RESET_MOVIES';
export const resetMovies = () => ({
  type: RESET_MOVIES
});

export const fetchMovies = () => (dispatch, getState) => {
  dispatch(fetchMoviesRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchMoviesSuccess(res));
    })
    .catch(err => dispatch(fetchMoviesFailure(err)));
};