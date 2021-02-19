import React from 'react';

class InputSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
    return (
        <div className="m-2">
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text searchBarName">Select topic</div>
                </div>
                <select type="text" className="form-control" onChange={event => this.search(event.target.value)} value={this.state.term} name="search" placeholder="Topics">
                <option value="Design" selected>Design</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Gamers">Gamers</option>

                </select>
                <br/>
            </div>
        </div>
    );
    }

    search(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default InputSearch;