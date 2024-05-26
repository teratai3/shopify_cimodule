import React from 'react';
import ErrorComponent from '../components/errors/ErrorComponent';
import { Link } from 'react-router-dom';
import { Page, Card, Button } from '@shopify/polaris';
const NotFoundPage = () => {
  return (
    <ErrorComponent error={"お探しのページは存在しません。"} title="404 - ページが見つかりません">
      <div className='mt20'>
        <Card sectioned>
          <Link to="/">トップページに戻る</Link>
        </Card>
      </div>
    </ErrorComponent>
  );
}

export default NotFoundPage;
