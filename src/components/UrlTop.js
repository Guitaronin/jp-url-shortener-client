import React from 'react';
import useRefresh from '../hooks/useRefresh';
import Error from "./Error";

const UrlTop = ({ baseURL }) => {
    const[results, errorMessage, refresh] = useRefresh([]);

    if(errorMessage){
        return <Error renderError={true} error={errorMessage}/>;
    }

    const renderedResults = results.map((result) => {
        return (
            <tr key={result.short_code}>
                <td>{result.title}</td>
                <td>{result.full_url}</td>
                <td>{result.click_count}</td>
                <td>{baseURL}{result.short_code}</td>
            </tr>
        );
    });

    return (
        <div className="ui container">
            <div className="ui center aligned basic segment">
                <div className="ui horizontal divider">
                    Top 100 URLs
                </div>
                <div className="ui center aligned basic segment">
                    <button onClick={refresh} className="ui blue button">Refresh</button>
                </div>
                <div className="ui center aligned container">
                    <table className="ui celled table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Full URL</th>
                            <th>Number of Visits</th>
                            <th>Short Url</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderedResults}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UrlTop;