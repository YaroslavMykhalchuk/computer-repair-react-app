import { useState, useEffect } from "react";

const useFetchSelect = (baseUrl, selectedId) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!selectedId) {
            setData(null);
            return;
        }

        setIsLoading(true);
        setError(null);

        fetch(`${baseUrl}/${selectedId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });

    }, [baseUrl, selectedId]);

    return { data, isLoading, error };
}

export default useFetchSelect;