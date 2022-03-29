import { FILTER_FAILURE, FILTER_SUCCESS, FILTER_REQUEST } from "../types";

const initialState = {
  isFetching: false,
  error: null,
  projectList: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FILTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projectList: action.payload.projectList,
      };
    case FILTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default filterReducer;
