/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import IndexContent from './IndexContent';  

// components
import GlobalAppContext from '../../context';

/**
 * @file indexContent.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Main Content Post From Reddit
 */



const MainContent = ({ selectedPost, fullPost }) => {
  const { toggled , setToggled } = useContext(GlobalAppContext);
 return( <main className="page-content">
    <IndexContent message={selectedPost} postfull={fullPost} />    
    <div className="overlay" onClick={() =>setToggled(!toggled)}  onKeyDown={() =>setToggled(!toggled)}/>       
  </main>);
}

const mapStateToProps = (state) => ({
  selectedPost: state.simpleReducer.selectedPost,
  fullPost: state.simpleReducer.fullPost
});

MainContent.propTypes = {
  selectedPost: PropTypes.func.isRequired,
  fullPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(MainContent);

