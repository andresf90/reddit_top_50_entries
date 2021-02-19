import React from 'react';

import IndexContent from './IndexContent'

function MainContent() {

    return (
        <main className="page-content">
            <IndexContent />
            <div className="overlay"></div>
            <div className=" routes ">
            </div>
        </main>
    )
}

export default MainContent;