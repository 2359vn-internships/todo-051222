import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import configureStore from "./setup/createStore";
import ReduxPersist from "../config/reduxPersist";
import * as todoRedux from "./todoRedux";

/* ------------- Assemble The Reducers ------------- */
export const appReducers = combineReducers({
  todo: todoRedux.reducer,
});
const reducers = (state: any, action: any) => {
  return appReducers(state, action);
};
export default () => {
  let finalReducers = reducers;

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let store = configureStore(finalReducers);

  return store;
};
