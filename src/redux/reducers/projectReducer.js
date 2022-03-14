import projects from "../projects.json";
import { FILTER_PROJECTS } from "../actions";

const initialState = projects.map((item) => {
  return {
    ...item,
    isVisiable: true,
  };
});

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PROJECTS:
      return state.map((item) => {
        if (
          item.title.toUpperCase().indexOf(action.payload.toUpperCase()) > -1 ||
          item.text.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        ) {
          return {
            ...item,
            isVisiable: true,
          };
        } else {
          return {
            ...item,
            isVisiable: false,
          };
        }
      });
    default:
      return state;
  }
};

export default projectReducer;
