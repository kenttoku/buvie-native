import {
  login,
  clearAuth,
  CLEAR_AUTH,
  setAuthToken,
  SET_AUTH_TOKEN,
  authRequest,
  AUTH_REQUEST,
  authSuccess,
  AUTH_SUCCESS,
  authError,
  AUTH_ERROR
} from './authActions'

import {
  setGenres,
  SET_GENRES,
  setMovies,
  SET_MOVIES,
  fetchCurrentuser,
  fetchCurrentuserRequest,
  FETCH_CURRENT_USER_REQUEST,
  fetchCurrentuserSuccess,
  FETCH_CURRENT_USER_SUCCESS,
  fetchCurrentuserFailure,
  FETCH_CURRENT_USER_FAILURE,
  updateUser,
  updateUserRequest,
  UPDATE_USER_REQUEST,
  updateUserSuccess,
  UPDATE_USER_SUCCESS,
  updateUserFailure,
  UPDATE_USER_FAILURE,
  fetchMatches,
  fetchMatchesRequest,
  FETCH_MATCHES_REQUEST,
  fetchMatchesSuccess,
  FETCH_MATCHES_SUCCESS,
  fetchMatchesFailure,
  FETCH_MATCHES_FAILURE,
  popcornUser,
  popcornUserRequest,
  POPCORN_USER_REQUEST,
  popcornUserSuccess,
  POPCORN_USER_SUCCESS,
  popcornUserFailure,
  POPCORN_USER_FAILURE,
  registerUser
} from './userActions'

import {
  fetchMovies,
  fetchMoviesRequest,
  FETCH_MOVIES_REQUEST,
  fetchMoviesSuccess,
  FETCH_MOVIES_SUCCESS,
  fetchMoviesFailure,
  FETCH_MOVIES_FAILURE,
  resetMovies,
  RESET_MOVIES
} from './movieActions'

export {
  // Auth Actions
  login,
  clearAuth,
  CLEAR_AUTH,
  setAuthToken,
  SET_AUTH_TOKEN,
  authRequest,
  AUTH_REQUEST,
  authSuccess,
  AUTH_SUCCESS,
  authError,
  AUTH_ERROR,
  // User Actions
  setGenres,
  SET_GENRES,
  setMovies,
  SET_MOVIES,
  fetchCurrentuser,
  fetchCurrentuserRequest,
  FETCH_CURRENT_USER_REQUEST,
  fetchCurrentuserSuccess,
  FETCH_CURRENT_USER_SUCCESS,
  fetchCurrentuserFailure,
  FETCH_CURRENT_USER_FAILURE,
  updateUser,
  updateUserRequest,
  UPDATE_USER_REQUEST,
  updateUserSuccess,
  UPDATE_USER_SUCCESS,
  updateUserFailure,
  UPDATE_USER_FAILURE,
  fetchMatches,
  fetchMatchesRequest,
  FETCH_MATCHES_REQUEST,
  fetchMatchesSuccess,
  FETCH_MATCHES_SUCCESS,
  fetchMatchesFailure,
  FETCH_MATCHES_FAILURE,
  popcornUser,
  popcornUserRequest,
  POPCORN_USER_REQUEST,
  popcornUserSuccess,
  POPCORN_USER_SUCCESS,
  popcornUserFailure,
  POPCORN_USER_FAILURE,
  registerUser,
  // Movie Actions
  fetchMovies,
  fetchMoviesRequest,
  FETCH_MOVIES_REQUEST,
  fetchMoviesSuccess,
  FETCH_MOVIES_SUCCESS,
  fetchMoviesFailure,
  FETCH_MOVIES_FAILURE,
  resetMovies,
  RESET_MOVIES
}