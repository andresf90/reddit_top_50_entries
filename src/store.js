/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */
/*
import { createStore, applyMiddleware} from "redux";
import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"; */



/**
 * @file store.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Redux Store
 */

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
} */


/* export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store);

export default { store, persistor } */

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
  
export default { store, persistor };

