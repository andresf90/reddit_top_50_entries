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
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import IndexContent from './IndexContent';  

/**
 * @file indexContent.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Main Content Post From Reddit
 */

const MainContent = ({ selectedPost }) => (
  <main className="page-content">
    <IndexContent message={selectedPost} />            
  </main>
)

const mapStateToProps = (state) => ({
  selectedPost: state.simpleReducer.selectedPost
});

MainContent.propTypes = {
  selectedPost: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(MainContent);

