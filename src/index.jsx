import React from 'react';
import './index.css';
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

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