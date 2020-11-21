import React from 'react';
// Component to render the newly created URL
const NewUrl = ({ baseUrl, renderNew, newUrl }) => {
    const newResult = () => {
        return (
            <div className="inline field">
                <div className="ui right pointing green basic label">
                    New Short URL
                </div>
                <label>{baseUrl}{newUrl}</label>
            </div>
        );
    };

    return (
        <div className="ui center aligned container" style={{marginTop: '15px'}}>
            {renderNew ? newResult() : null}
        </div>
    );
};

export default NewUrl;