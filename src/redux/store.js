import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => {
// localStorage.setItem("store", JSON.stringify(store.getState()));
// });
