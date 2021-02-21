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

// components
import GlobalAppContext from '../../context';

/**
 * @file indexContent.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Main Content Post From Reddit
 */


const IndexContent = ({ message }) => {
    const { toggled , setToggled } = useContext(GlobalAppContext);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="form-group col-md-12 padding_menu">                
                <FontAwesomeIcon icon={faBars} onClick={() =>setToggled(!toggled)} />
                </div>
                <div className="form-group col-md-12">
                    <br/>
                    <h2>{message.author} </h2>
                    <hr />
                    <br/>
                    {message.thumbnail && <img src={message.thumbnail} alt=""/>}
                    <br/>
                    <br/>
                    <br/>
                    <p>{message.title}</p>
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
    }),
}

IndexContent.defaultProps = {
    message: {}
}

export default IndexContent;