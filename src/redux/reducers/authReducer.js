import { LOGIN_ACTION, LOGOUT_ACTION } from "../actions";

const initialState = {
  isLoggedIn: false,
};

const persistedState = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store")).auth
  : initialState;

const authReducer = (state = persistedState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
