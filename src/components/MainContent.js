import React from 'react';

const MainContent = ({ content }) => {
    return (
        <div style={{marginTop: '10px'}}>
            <div className="ui raised segment">
                {content}
            </div>
        </div>
    );
};

export default MainContent;