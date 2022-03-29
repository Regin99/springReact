import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../types";

const signupReducer = (
  state = {
    isFetching: false,
    errors: null,
  },
  action
) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        errors: action.payload.error,
      };
    default:
      return state;
  }
};

export default signupReducer;
