import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILURE,
} from "./types";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});
export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: {
    error,
  },
});

export const getProjectsRequest = () => ({
  type: GET_PROJECTS_REQUEST,
});

export const getProjectsSuccess = (projectList) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: {
    projectList,
  },
});

export const getProjectsFailure = (error) => ({
  type: GET_PROJECTS_FAILURE,
  payload: {
    error,
  },
});

export const filterSuccess = (projectList) => ({
  type: FILTER_SUCCESS,
  payload: {
    projectList,
  },
});

export const filterRequest = () => ({
  type: FILTER_REQUEST,
});

export const filterFailure = (error) => ({
  type: FILTER_FAILURE,
  payload: {
    error,
  },
});
