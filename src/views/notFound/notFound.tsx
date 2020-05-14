import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

import './notFound.scss';

export const NotFoundView = () => (
  <div className="NotFoundView">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  </div>
);
