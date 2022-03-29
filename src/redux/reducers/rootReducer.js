import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import authentificationReducer from "./authentificationReducer";
import signupReducer from "./signupReducer";

export const rootReducer = combineReducers({
  auth: authentificationReducer,
  projects: projectReducer,
  signup: signupReducer,
});
