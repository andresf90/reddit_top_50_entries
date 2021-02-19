import React , { useContext } from 'react';
import { GlobalAppContext } from './../../context';

import reactLogo from '../../images/logo.svg'

function IndexContent() {

const { toggled , setToggled , hasBackground, setHasBackground } = useContext(
    GlobalAppContext
);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="form-group col-md-12">
                    <h2> <img src={reactLogo} alt="React logo" width="100px" /> React Sidebar Template</h2>
                    <hr />
                    <p>This is a responsive sidebar template with dropdown menu built with React > 16.8 and bootstrap 4.</p>
                    <hr />
                    <a href="#/" className="btn btn-outline-secondary mr-1" onClick={() =>setToggled(!toggled)}>Toggle Sidebar</a>
                    <a href="#/" className="btn btn-secondary" onClick={() =>setHasBackground(!hasBackground)} >Toggle Background Image</a>
                </div>
            </div>
            <div className="attribution text-center badge badge-warning">
                React version of  <strong><a href="https://github.com/azouaoui-med/pro-sidebar-template">pro-sidebar-template</a> made by azouaoui mohamed</strong> 
            </div>
        </div>
    )
}

export default IndexContent;