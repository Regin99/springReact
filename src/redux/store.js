import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);

// store.subscribe(() => {
//   localStorage.setItem("store", JSON.stringify(store.getState()));
// });
