import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url, { signal });
                const json = await res.json();

                setLoading(false);
                setData(json);
                setError(null);
            } catch(error) {
                setLoading(false);
                setError('Could not fetch the data');
            }
        }
    
        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
};
