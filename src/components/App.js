import React from 'react';
import UrlTop from './UrlTop';
import UrlForm from './UrlForm';

const App = () => {
    const baseURL = 'localhost:3000/'

    return (
      <div className="ui container">
          <div className="ui center aligned basic segment">
              <h1>JP URL Shortener</h1>
          </div>
          <UrlForm baseURL={baseURL} />
          <UrlTop baseURL={baseURL}/>
      </div>
    );
};

export default App;