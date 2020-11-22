import { useState, useEffect } from 'react';
import url from '../api/url';
// This is a custom hook for refreshing the data on demand
const useRefresh = () => {
    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const response = await url.get('',
        ).catch(err => {
            setErrorMessage('Error fetching the data');
        });

        if(response){
            setResults(response.data.urls);
            setErrorMessage('');
        }

    };

    return [results, errorMessage, refresh];
};

export default useRefresh;