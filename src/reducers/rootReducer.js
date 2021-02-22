/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import simpleReducer from "./simpleReducer";

const persistConfig = {

  key: 'root',
  storage,
  whitelist: [simpleReducer]

}

const rootReducer = combineReducers({
  simpleReducer,
});

export default persistReducer(persistConfig, rootReducer);

/* export default combineReducers({
  simpleReducer,
}); */