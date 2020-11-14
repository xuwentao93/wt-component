import * as React from 'react';
import { useState, useRef } from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Button from '../../../component/button/index';

const button = createPageRootClassName('button');

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);
  const testRef = useRef();
  const methods = {
    test(): void {
      console.log(testRef);
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
      <Button type="danger" style={{ marginTop: '20px' }} arrow="right" compRef={testRef}>中文</Button>
      <Button type="warn" style={{ marginTop: '20px' }} arrow="top">english</Button>
      <Button type="warn" style={{ marginTop: '20px' }}>double words</Button>
      <Button type="warn" style={{ marginTop: '20px' }} disabled loading={loading}>你好啊: 我好</Button>
    </div>
  );
}
