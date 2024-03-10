import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ message: null, code: null });

    useEffect(() => {
        setIsLoading(true);
        setData(null);
        setError({ code: null, message: null });
    
        fetch(url)
            .then(response => {
            if (!response.ok) {
                throw Error(response.statusText, { code: response.status });
            }
            return response.json();
            })
            .then(data => setData(data))
            .catch(error => {
                setError({ code: error.code || 'Unknown', message: error.message });
            })
            .finally(() => setIsLoading(false));
      }, [url]);

    return {data, isLoading, error};
}

export default useFetch;