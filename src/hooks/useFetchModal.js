import { useState, useEffect } from 'react';

const useFetchModal = (url, modalId) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleShow = () => {
            setIsLoading(true);
            setError(null);

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(result => {
                    setData(result);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            modalElement.addEventListener('shown.bs.modal', handleShow);
        }

        // Cleanup
        return () => {
            if (modalElement) {
                modalElement.removeEventListener('shown.bs.modal', handleShow);
            }
        };
    }, [url, modalId]);

    return { data, isLoading, error };
};

export default useFetchModal;