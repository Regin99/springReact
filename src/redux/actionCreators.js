import { LOGIN_ACTION, FETCHING, FILTER_PROJECTS, GET_PROJECTS } from "./types";

export const loginAction = (login, password, isLoggedIn) => ({
  type: LOGIN_ACTION,
  payload: {
    isLoggedIn,
  },
});

export const getProjectsAction = (projectList) => ({
  type: GET_PROJECTS,
  payload: {
    projectList,
  },
});

export const fetchingAction = (isFetching) => ({
  type: FETCHING,
  payload: {
    isFetching,
  },
});

export const filterAction = (projectList) => ({
  type: FILTER_PROJECTS,
  payload: {
    projectList,
  },
});
