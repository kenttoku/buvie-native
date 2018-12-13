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
  fetchCurrentuser,
  fetchCurrentuserRequest,
  FETCH_CURRENT_USER_REQUEST,
  fetchCurrentuserSuccess,
  FETCH_CURRENT_USER_SUCCESS,
  fetchCurrentuserFailure,
  FETCH_CURRENT_USER_FAILURE,
} from './userActions'

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
  fetchCurrentuser,
  fetchCurrentuserRequest,
  FETCH_CURRENT_USER_REQUEST,
  fetchCurrentuserSuccess,
  FETCH_CURRENT_USER_SUCCESS,
  fetchCurrentuserFailure,
  FETCH_CURRENT_USER_FAILURE,
}