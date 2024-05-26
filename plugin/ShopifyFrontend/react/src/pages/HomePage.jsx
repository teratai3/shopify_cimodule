import React, { useEffect } from 'react';
import { Page, Card, Button } from '@shopify/polaris';
import useFetchData from '../hooks/useFetchData';
import ErrorComponent from '../components/errors/ErrorComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { data, error, fetchData } = useFetchData('/api/products');

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Page title="サンプルアプリ">
      <div className="mb20">
        <Card sectioned>
          <Button onClick={fetchData}>製品データを再取得する</Button>
        </Card>
      </div>

      {data && (
        <div className="mb20">
        <Card title="Fetched Data" sectioned>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Card>
        </div>
      )}

      <Card sectioned>
        <Link to="/test">存在しないページへ移動</Link>
      </Card>

    </Page>
  );
};

export default HomePage;
