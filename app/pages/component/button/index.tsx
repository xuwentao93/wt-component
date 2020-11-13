import * as React from 'react';
import { useState } from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Button from '../../../component/button/index';

const button = createPageRootClassName('button');

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);
  const methods = {
    test(): void {
      setLoading(!loading);
    }
  };

  return (
    <div className={button}>
      <Button
        onClick={methods.test}
        style={{ fontSize: '20px' }}
        arrow="bottom"
        loading={loading}
      >
        button page
      </Button>
      <Button type="primary" style={{ marginTop: '20px' }} arrow="left">213</Button>
      <Button type="danger" style={{ marginTop: '20px' }} arrow="right">213</Button>
      <Button type="warn" style={{ marginTop: '20px' }} arrow="top">213</Button>
      <Button type="warn" style={{ marginTop: '20px' }}>213</Button>
      <Button type="warn" style={{ marginTop: '20px' }} disabled loading={loading}>213</Button>
    </div>
  );
}
