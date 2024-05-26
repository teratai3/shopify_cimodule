import { useState } from 'react';
import { useAuthFetch } from '../utils/AuthFetchContext';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchFunction = useAuthFetch();

  const fetchData = async () => {
    try {
      const response = await fetchFunction(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'ネットワークの応答が正常ではありませんでした');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, error, fetchData };
};

export default useFetchData;
