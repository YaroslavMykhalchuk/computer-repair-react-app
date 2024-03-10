import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ message: null, code: null });

    useEffect(() => {
        setIsLoading(true);
        setData(null);
        setError({ message: null, code: null });

        fetch(url)
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok', {
                cause: { code: response.status }
                });
            }
            return response.json();
            })
            .then((respData) => setData(respData))
            .catch((e) => {
                setError({ message: e.message, code: e.cause?.code || "Unknown" });
            })
            .finally(() => setIsLoading(false));
    }, [url]);

    return [data, isLoading, error];
}

export default useFetch;