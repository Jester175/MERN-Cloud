import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { fileReducer } from "./reducers/fileReducer";

const root = combineReducers({
  user: userReducer,
  file: fileReducer,
});

export type RootStore = ReturnType<typeof root>

export const store = legacy_createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
