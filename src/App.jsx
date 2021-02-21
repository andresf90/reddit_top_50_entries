/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React, { useState } from 'react';
import { Provider } from "react-redux";
import configureStore from "./store";
import SideBar from './layout/sideBar/sideBar';
import MainContent from './layout/main/MainContent';
import GlobalAppContext from './context';

// styles
import './App.scss'; 

/**
 * @file App.js
 * @author Andres Felipe Albarracin Arroyave
 * @description App.js  Home page
 */

const store = configureStore();
const App = () => {

  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";

  return (
    <Provider store={store}>
      <GlobalAppContext.Provider value={{toggled, setToggled, hasBackground, setHasBackground}}>
        <div className={`page-wrapper default-theme bg1 ${style}`}>
          <SideBar />
          <MainContent/>
        </div>
      </GlobalAppContext.Provider>
    </Provider>
  );
};

export default App;
