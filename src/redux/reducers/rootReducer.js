import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import authentificationReducer from "./authentificationReducer";

export const rootReducer = combineReducers({
  auth: authentificationReducer,
  projects: projectReducer,
});
