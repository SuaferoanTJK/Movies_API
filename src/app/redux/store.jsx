import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
/* import { countriesAPI } from "./reducer/countriesReducer";
 */
export default createStore(
  /*   countriesAPI, */
  composeWithDevTools(applyMiddleware(thunk))
);
