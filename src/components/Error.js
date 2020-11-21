import React from 'react';
// Component with the whole purpose of displaying error messages
const Error = ({ renderError, error }) => {
    const errorMessage = () => {
        return (
            <div className='ui pointing red basic label'>
                {error}
            </div>
        );
    };

    return (
        <div className="ui center aligned container" style={{marginTop: '15px'}}>
            {renderError ? errorMessage() : null}
        </div>
    );
};

export default Error;