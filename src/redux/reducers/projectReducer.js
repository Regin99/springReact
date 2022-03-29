import {
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  FILTER_FAILURE,
  FILTER_SUCCESS,
  FILTER_REQUEST,
} from "../types";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projectList: action.payload.projectList,
      };
    case GET_PROJECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
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

export default projectReducer;
