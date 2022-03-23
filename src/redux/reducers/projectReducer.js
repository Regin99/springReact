import { FILTER_PROJECTS, GET_PROJECTS } from "../types";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return action.payload.projectList.map((item) => {
        return {
          ...item,
          isVisiable: true,
        };
      });

    case FILTER_PROJECTS:
      return action.payload.projectList.map((item) => {
        return {
          ...item,
        };
      });

    default:
      return state;
  }
};

export default projectReducer;
