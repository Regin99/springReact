import { LOGIN_ACTION, FETCHING } from "./types";

export const loginAction = (login, password) => ({
  type: LOGIN_ACTION,
  payload: {
    isLoggedIn: true,
    user: {
      login,
      password,
    },
  },
});

export const fetchingAction = (fetch) => ({
  type: FETCHING,
  payload: {
    isFetching: fetch,
  },
});
