import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "../types";
const initialState = {
  isFetching: false,
  isLoggedIn: false,
};

const persistedState = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store")).auth
  : initialState;

const authentificationReducer = (state = persistedState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
