import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import custmerReducer from '../slices/custmer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const rootReducer = combineReducers({
  custmer: custmerReducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  return createStore(persistedReducer);
};

export default configureStore;
