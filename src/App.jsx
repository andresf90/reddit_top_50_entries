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
import SideBar from './components/sideBar';
import MainContent from './layout/main/MainContent';
import GlobalAppContext from './context';

// styles
import './App.scss'; 

/**
 * @file App.js
 * @author Andres Felipe Albarracin Arroyave
 * @description App.js  Home page
 */

const App = () => {

  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";

  return (

      <GlobalAppContext.Provider value={{toggled, setToggled, hasBackground, setHasBackground}}>
        <div className={`page-wrapper default-theme bg1 ${style}`}>
          <SideBar/>
          <MainContent/>
        </div>
      </GlobalAppContext.Provider>
  );
};

export default App;



