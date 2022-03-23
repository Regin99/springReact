import { FETCHING, LOGIN_ACTION } from "../types";
const initialState = {
  isFetching: false,
  isLoggedIn: false,
};

const persistedState = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store")).auth
  : initialState;

const authentificationReducer = (state = persistedState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case LOGIN_ACTION:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
