/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React , { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

// components
import GlobalAppContext from '../../context';

/**
 * @file indexContent.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Main Content Post From Reddit
 */

const IndexContent = () => {
    const { toggled , setToggled } = useContext(GlobalAppContext);
    const selectedPost = useSelector(state => state.simpleReducer.fullPost);
    const addDefaultSrc = (e) => {
        e.target.src = 'https://b.thumbs.redditmedia.com/N23Zz0q7Dv8hQPOf3ajVZoq4IOpp5jCN_KTo29RyYXM.jpg';
      }

    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="form-group col-md-12 padding_menu">                
                <FontAwesomeIcon icon={faBars} class="menu_toggle" onClick={() =>setToggled(!toggled)} />
                </div>
                <div className="form-group col-md-12">
                    <br/>
                    <h2>{selectedPost && selectedPost.author} </h2>
                    <hr />
                    <br/>
                    <div className="text-center">{selectedPost && selectedPost.thumbnail && <img onError={addDefaultSrc} src={selectedPost.thumbnail} alt=""/>}</div>
                    <br/>
                    <br/>
                    <br/>
                    <p>{selectedPost &&  selectedPost.title}</p>
                    <hr /> 
                </div>
            </div>
        </div>
    )
}

IndexContent.propTypes = {
    message: PropTypes.shape({
        author: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
    })
  
}

IndexContent.defaultProps = {
    message: {}
}

export default IndexContent;