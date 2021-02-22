/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React from 'react';
import './index.css';
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @file App.js
 * @author Andres Felipe Albarracin Arroyave
 * @description index.jsx  global page
 */

// Redux - states maped to props   
const mapStateToProps = state => ({
  fullPost: state.fullPost,
  sideBarPosts: state.sideBarPosts,
  setReadPosts: state.setReadPosts,
});

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);



// ReactDOM.render(<App />, document.getElementById("root"));