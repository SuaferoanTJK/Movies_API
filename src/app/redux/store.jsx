import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesAPI } from "./reducer/moviesReducer";

export default createStore(
  moviesAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
