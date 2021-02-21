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

class InputSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    search(term) {
        const {onSearchTermChange} = this.props;
        this.setState({term});
        onSearchTermChange(term);
    }

    render() {
        const { term } = this.state;
        
        return (
            <div className="m-2">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text searchBarName">Select topic</div>
                    </div>
                    <select type="text" className="form-control" onChange={event => this.search(event.target.value)} value={term} name="search" placeholder="Topics">
                    <option value="Design" >Design</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Lamborghini">Lamborghini</option>
                    <option value="Gamers">Gamers</option>
    
                    </select>
                    <br/>
                </div>
            </div>
        );
        }
}

InputSearch.propTypes = {
 onSearchTermChange: PropTypes.func.isRequired
};

export default InputSearch;