import { useState, useEffect } from 'react';
import url from '../api/url';

// This is a custom hook for refreshing the data on demand
const useRefresh = () => {
    const[results, setResults] = useState([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const { data } = await url.get('');
        setResults(data.urls);
    };

    return [results, refresh];
};

export default useRefresh;