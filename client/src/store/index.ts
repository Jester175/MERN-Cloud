import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const root = combineReducers({
  user: userReducer,
});

export type RootStore = ReturnType<typeof root>

export const store = legacy_createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
