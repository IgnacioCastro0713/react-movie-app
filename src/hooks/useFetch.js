import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await fetch(url, options);
        const json = await result.json();
        setResult(json);
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false)
      }
    })();
  }, [url, options]);
  return { loading, result, error };
}