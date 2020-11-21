import React, { useState } from 'react';
import url from '../api/url';
import Error from './Error';
import NewUrl from './NewUrl';

const UrlForm = ({ baseURL }) => {
    const [term, setTerm] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [renderError, setRenderError] = useState(false);
    const [error, setError] = useState('');
    const [renderNew, setRenderNew] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const save = async () => {
            const response = await url.post('/short_urls.json', {
                full_url: term
            }).catch(err => {
                setError(err.response.data.errors[0]);
                setRenderError(true);
                setRenderNew(false);
            });

            if(response){
                setNewUrl(response.data.short_code);
                setRenderNew(true);
                setRenderError(false);
                setError('');
                setTerm('');
            }
        };

        save();
    };

    return (
        <div className="ui center aligned segment" style={{width: '40%', marginLeft: '30%'}}>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <h3>Full Url</h3>
                    <input
                        value={term}
                        placeholder="https://www.example.com/"
                        onChange={(event) => setTerm(event.target.value)}
                        type="text"/>
                   <Error renderError={renderError} error={error}/>
                </div>
                <button className="ui blue submit button" type="submit">Save</button>
            </form>
            <NewUrl baseUrl={baseURL} renderNew={renderNew} newUrl={newUrl}/>
        </div>
    );
};

export default UrlForm;